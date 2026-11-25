
import React from "react";

const PdpSkeleton = () => {
  return (
    <div className="mx-auto max-w-7xl animate-pulse px-5 py-10">

      {/* Breadcrumb */}
      <div className="mb-8 h-4 w-64 rounded bg-gray-200" />

      {/* Main Product Section */}
      <div className="grid grid-cols-1 gap-10 rounded-2xl bg-white p-5 shadow-sm md:grid-cols-2 md:p-8">

        {/* Image Section */}
        <div>
          <div className="h-[420px] rounded-xl bg-gray-200" />

          {/* Thumbnails */}
          <div className="mt-4 flex gap-3">
            {Array.from({ length: 4 }).map((_, index) => (
              <div
                key={index}
                className="h-20 w-20 shrink-0 rounded-lg bg-gray-200"
              />
            ))}
          </div>
        </div>

        {/* Product Details */}
        <div className="flex flex-col space-y-6">

          {/* Brand */}
          <div className="h-4 w-28 rounded bg-gray-200" />

          {/* Title */}
          <div className="space-y-2">
            <div className="h-8 w-4/5 rounded bg-gray-200" />
            <div className="h-8 w-2/3 rounded bg-gray-200" />
          </div>

          {/* Rating */}
          <div className="h-5 w-40 rounded bg-gray-200" />

          <div className="border-t border-gray-100" />

          {/* Price */}
          <div className="flex gap-3">
            <div className="h-9 w-28 rounded bg-gray-200" />
            <div className="h-7 w-20 rounded bg-gray-200" />
          </div>

          {/* Availability */}
          <div className="h-7 w-28 rounded-full bg-gray-200" />

          {/* Description */}
          <div className="space-y-3">
            <div className="h-4 w-full rounded bg-gray-200" />
            <div className="h-4 w-full rounded bg-gray-200" />
            <div className="h-4 w-4/5 rounded bg-gray-200" />
          </div>

          {/* Shipping Information */}
          <div className="space-y-4 rounded-xl bg-gray-100 p-5">
            <div className="h-4 w-3/4 rounded bg-gray-200" />
            <div className="h-4 w-2/3 rounded bg-gray-200" />
            <div className="h-4 w-3/4 rounded bg-gray-200" />
          </div>

          {/* Buttons */}
          <div className="flex flex-col gap-3 sm:flex-row">
            <div className="h-14 flex-1 rounded-xl bg-gray-200" />
            <div className="h-14 flex-1 rounded-xl bg-gray-200" />
          </div>

          {/* SKU */}
          <div className="h-3 w-32 rounded bg-gray-200" />

        </div>
      </div>

      {/* Product Information Skeleton */}
      <div className="mt-8 rounded-2xl bg-white p-6 shadow-sm md:p-8">

        <div className="mb-8 h-6 w-48 rounded bg-gray-200" />

        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {Array.from({ length: 6 }).map((_, index) => (
            <div key={index} className="space-y-3">
              <div className="h-4 w-24 rounded bg-gray-200" />
              <div className="h-5 w-32 rounded bg-gray-200" />
            </div>
          ))}
        </div>

      </div>

    </div>
  );
};

export default PdpSkeleton;
