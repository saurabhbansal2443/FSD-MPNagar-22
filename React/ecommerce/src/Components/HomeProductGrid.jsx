import React, { useEffect, useState } from "react";
import CategorySkeleton from "../Skeleton/CategorySkeleton";
import { Link } from "react-router-dom";

const HomeProductGrid = () => {
  const [categories, setCategories] = useState([]);
  const [categoryLoading, setCategoryLoading] = useState(true);

  async function getData() {
    try {
      setCategoryLoading(true);
      let apiData = await fetch(`https://dummyjson.com/products/categories`);
      let data = await apiData.json();
      setCategories(data);
    } catch (err) {
      console.log(err);
    } finally {
      setCategoryLoading(false);
    }
  }

  useEffect(function () {
    getData();
  }, []);

  console.log(categories);

  return (
    <div className="w-full px-6 py-5">
      {categoryLoading ? (
        <CategorySkeleton />
      ) : (
        <div className="flex gap-4 overflow-x-auto whitespace-nowrap scrollbar-hide">
          {categories.map(function (catgoryData) {
            return (
              <Link to={`/category/${catgoryData?.slug}`}>
                <div
                  key={catgoryData?.slug}
                  className="shrink-0 cursor-pointer rounded-full border border-gray-200 bg-white px-6 py-3 text-sm font-medium capitalize text-gray-700 shadow-sm transition-all duration-200 hover:border-black hover:bg-black hover:text-white"
                >
                  {catgoryData.name}
                </div>
              </Link>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default HomeProductGrid;
