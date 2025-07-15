import React, { useEffect, useRef, useState, useCallback } from "react";
import { fetchNews } from "../api/newsapi";
import type { NewsArticle } from "../api/newsapi";
import { LoadingSkeleton } from "./LoadingSkeleton";
import NewsCard from "./ui/card";

const PAGE_SIZE = 10;

const NewsReader: React.FC = () => {
  const [articles, setArticles] = useState<NewsArticle[]>([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const [hasMore, setHasMore] = useState(true);
  const sentinelRef = useRef<HTMLDivElement | null>(null);
  const [isOnline, setIsOnline] = useState(navigator.onLine);
  const [isSlowNetwork, setIsSlowNetwork] = useState(false);

  // Fetching news
  const loadNews = useCallback(async () => {
    setLoading(true);
    try {
      const newArticles = await fetchNews(page, PAGE_SIZE);
      console.log(newArticles);
      setArticles((prev) => [...prev, ...newArticles]);
      setHasMore(newArticles.length === PAGE_SIZE);
    } catch (error) {
      setHasMore(false);
      console.log(error);
    }
    setLoading(false);
  }, [page]);

  // Fetching news on page and loading change
  useEffect(() => {
    loadNews();
  }, [page, loadNews]);

  // Using Intersection Observer for infinite scrolling
  useEffect(() => {
    if (!hasMore || loading) return;
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setPage((prev) => prev + 1);
        }
      },
      { threshold: 1 }
    );
    if (sentinelRef.current) observer.observe(sentinelRef.current);
    return () => {
      if (sentinelRef.current) observer.unobserve(sentinelRef.current);
    };
  }, [hasMore, loading]);

  useEffect(() => {
    const handleOnline = () => setIsOnline(true);
    const handleOffline = () => setIsOnline(false);
    window.addEventListener("online", handleOnline);
    window.addEventListener("offline", handleOffline);
    type NetworkConnection = {
      effectiveType?: string;
      saveData?: boolean;
      addEventListener: (type: string, listener: () => void) => void;
      removeEventListener: (type: string, listener: () => void) => void;
    };
    const connection = (
      navigator as unknown as { connection?: NetworkConnection }
    ).connection;
    if (connection) {
      const updateConnectionStatus = () => {
        setIsSlowNetwork(
          connection.effectiveType === "2g" ||
            connection.effectiveType === "slow-2g" ||
            !!connection.saveData
        );
      };
      updateConnectionStatus();
      connection.addEventListener("change", updateConnectionStatus);
      return () => {
        connection.removeEventListener("change", updateConnectionStatus);
        window.removeEventListener("online", handleOnline);
        window.removeEventListener("offline", handleOffline);
      };
    } else {
      return () => {
        window.removeEventListener("online", handleOnline);
        window.removeEventListener("offline", handleOffline);
      };
    }
  }, []);

  return (
    <div>
      {!isOnline && (
        <div
          style={{
            background: "red",
            color: "white",
            textAlign: "center",
            padding: 8,
          }}
        >
          You are offline. Some features may not be available.
        </div>
      )}
      {isOnline && isSlowNetwork && (
        <div
          style={{
            background: "orange",
            color: "black",
            textAlign: "center",
            padding: 8,
          }}
        >
          Slow network detected. Showing fewer images.
        </div>
      )}
      {articles.map((article, idx) => (
        <div key={idx} ref={articles.length - 1 === idx ? sentinelRef : null}>
          <NewsCard article={article} showImage={!isSlowNetwork} />
        </div>
      ))}
      {loading && <LoadingSkeleton />}
      {!hasMore && <p style={{ textAlign: "center" }}>No more news.</p>}
    </div>
  );
};

export default NewsReader;
