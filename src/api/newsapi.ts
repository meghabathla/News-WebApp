import { NEWS_API_KEY, NEWS_API_URL } from "../constants/config";

export interface NewsArticle {
  title: string;
  description: string;
  url: string;
  image: string;
  publishedAt: string;
  source: { name: string };
}

export async function fetchNews(
  page: number,
  pageSize: number
): Promise<NewsArticle[]> {
  const url = `${NEWS_API_URL}?q=tesla&from=2025-06-15&sortBy=publishedAt&apiKey=${NEWS_API_KEY}&pageSize=${pageSize}&page=${page}`;
  const res = await fetch(url);
  if (!res.ok) throw new Error("Failed to fetch news");
  const data = await res.json();
  return data.articles;
}
