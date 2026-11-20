import React, { useEffect, useState } from "react";
import CategorySkeleton from "../Skeleton/CategorySkeleton";

const HomeProductGrid = () => {
  const [categories, setCategories] = useState([]);

  async function getData() {
    let apiData = await fetch(`https://dummyjson.com/products/categories`);
    let data = await apiData.json();
    setCategories(data);
  }

  useEffect(function () {
    getData();
  }, []);

  return (
    <div className="w-full px-6 py-5">
      <div className="flex gap-4 overflow-x-auto whitespace-nowrap scrollbar-hide py-2">
        {categories.map(function (catgoryData) {
          return (
            <div
              key={catgoryData.slug}
              className="shrink-0 cursor-pointer rounded-full border border-gray-200 bg-white px-6 py-3 text-sm font-medium capitalize text-gray-700 shadow-sm transition-all duration-200 hover:border-black hover:bg-black hover:text-white"
            >
              {catgoryData.name}
            </div>
          );
        })}
      </div>
      <CategorySkeleton />
    </div>
  );
};

export default HomeProductGrid;
