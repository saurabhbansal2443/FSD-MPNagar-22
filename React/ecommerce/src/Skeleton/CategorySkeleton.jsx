
import React from "react";

const CategorySkeleton = () => {
  return (
    <div className="w-full px-0 py-5">
      <div className="flex gap-4 overflow-hidden py-2">
        {Array.from({ length: 10}).map((_, index) => (
          <div
            key={index}
            className="h-11 w-28 shrink-0 animate-pulse rounded-full bg-gray-200"
          />
        ))}
      </div>
    </div>
  );
};

export default CategorySkeleton;
