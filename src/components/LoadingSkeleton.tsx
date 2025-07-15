import React from "react";
// Using Loading Skeleton for better user experience, when the data is loading
export const LoadingSkeleton: React.FC = () => {
  return (
    <div className="border border-border bg-news-surface animate-pulse rounded-lg shadow-sm">
      <div className="p-0">
        <div className="flex flex-col sm:flex-row gap-4 p-4">
          {/* Image skeleton */}
          <div className="flex-shrink-0 w-full sm:w-32 h-32 sm:h-24 bg-gradient-shimmer bg-news-surface-variant rounded-lg animate-shimmer" />

          {/* Content skeleton */}
          <div className="flex-1 space-y-3">
            <div className="space-y-2">
              {/* Title skeleton */}
              <div className="space-y-2">
                <div className="h-5 bg-gradient-shimmer bg-news-surface-variant rounded animate-shimmer" />
                <div className="h-5 bg-gradient-shimmer bg-news-surface-variant rounded w-3/4 animate-shimmer" />
              </div>

              {/* Summary skeleton */}
              <div className="space-y-1">
                <div className="h-4 bg-gradient-shimmer bg-news-surface-variant rounded w-full animate-shimmer" />
                <div className="h-4 bg-gradient-shimmer bg-news-surface-variant rounded w-2/3 animate-shimmer" />
              </div>
            </div>

            {/* Meta skeleton */}
            <div className="flex items-center gap-2">
              <div className="h-6 w-20 bg-gradient-shimmer bg-news-surface-variant rounded-full animate-shimmer" />
              <div className="h-4 w-16 bg-gradient-shimmer bg-news-surface-variant rounded animate-shimmer" />
              <div className="h-4 w-12 bg-gradient-shimmer bg-news-surface-variant rounded animate-shimmer" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
