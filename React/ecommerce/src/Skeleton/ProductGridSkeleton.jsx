import React from "react";

const ProductGridSkeleton = () => {
  return (
    <div className="w-full px-6 py-8">
      {/* Heading Skeleton */}
      <div className="mb-6 flex items-center justify-between">
        <div className="space-y-2">
          <div className="h-7 w-48 animate-pulse rounded-md bg-gray-200" />

          <div className="h-4 w-56 animate-pulse rounded-md bg-gray-200" />
        </div>

        <div className="h-4 w-20 animate-pulse rounded-md bg-gray-200" />
      </div>

      {/* Product Grid Skeleton */}
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {Array.from({ length: 8 }).map((_, index) => (
          <div
            key={index}
            className="overflow-hidden rounded-xl border border-gray-200 bg-white"
          >
            {/* Image Skeleton */}
            <div className="h-64 animate-pulse bg-gray-200" />

            {/* Product Details Skeleton */}
            <div className="space-y-4 p-4">
              {/* Brand and Stock */}
              <div className="flex items-center justify-between">
                <div className="h-3 w-20 animate-pulse rounded bg-gray-200" />
                <div className="h-3 w-16 animate-pulse rounded bg-gray-200" />
              </div>

              {/* Title */}
              <div className="h-5 w-3/4 animate-pulse rounded bg-gray-200" />

              {/* Description */}
              <div className="space-y-2">
                <div className="h-3 w-full animate-pulse rounded bg-gray-200" />
                <div className="h-3 w-2/3 animate-pulse rounded bg-gray-200" />
              </div>

              {/* Rating */}
              <div className="h-4 w-28 animate-pulse rounded bg-gray-200" />

              {/* Price */}
              <div className="h-6 w-24 animate-pulse rounded bg-gray-200" />

              {/* Add to Cart Button */}
              <div className="h-11 w-full animate-pulse rounded-lg bg-gray-200" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductGridSkeleton;
