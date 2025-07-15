import React from "react";
import type { NewsArticle as BaseNewsArticle } from "../../api/newsapi";

interface NewsArticle extends BaseNewsArticle {
  urlToImage?: string;
}

interface NewsCardProps {
  article: NewsArticle;
  showImage?: boolean;
}

const NewsCard: React.FC<NewsCardProps> = ({ article, showImage = true }) => {
  return (
    <div className="bg-white rounded-xl shadow-md border border-gray-200 p-4 mb-6 max-w-xl mx-auto flex flex-col sm:flex-row gap-4 items-stretch">
      {showImage && article.urlToImage && (
        <div className="flex-shrink-0 flex justify-center items-center">
          <img
            src={article.urlToImage}
            alt={article.title}
            className="w-40 h-40 object-cover rounded-lg bg-gray-100"
            style={{ minWidth: "10rem", minHeight: "10rem" }}
          />
        </div>
      )}
      <div className="flex-1 flex flex-col justify-between">
        <div>
          <h2 className="text-lg font-semibold text-gray-800 mb-2">
            {article.title}
          </h2>
          <p className="text-gray-600 mb-3">{article.description}</p>
        </div>
        <div className="flex items-center justify-between mt-2">
          <span className="text-xs text-gray-500">{article.source.name}</span>
          <span className="text-xs text-gray-400">
            {new Date(article.publishedAt).toLocaleString()}
          </span>
        </div>
        <a
          href={article.url}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block mt-3 text-blue-600 hover:underline text-sm font-medium"
        >
          Read more
        </a>
      </div>
    </div>
  );
};

export default NewsCard;
