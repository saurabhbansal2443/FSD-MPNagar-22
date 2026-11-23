import React, { useEffect, useState } from "react";
import CategorySkeleton from "../Skeleton/CategorySkeleton";
import ProductGrid from "./ProductGrid";

const HomeProductGrid = () => {
  const [categories, setCategories] = useState([]);
  const [categoryLoading, setCategoryLoading] = useState(true);
  const [productsData, setProductsData] = useState([]);

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

  async function getData2() {
    try {
      let apiData = await fetch(`https://dummyjson.com/products`);
      let data = await apiData.json();
      setProductsData(data.products);
    } catch (err) {
      console.log(err);
    }
  }

  useEffect(function () {
    getData();
    getData2();
  }, []);

  return (
    <div className="w-full px-6 py-5">
      {categoryLoading ? (
        <CategorySkeleton />
      ) : (
        <div className="flex gap-4 overflow-x-auto whitespace-nowrap scrollbar-hide">
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
      )}
      <ProductGrid data={productsData} />
    </div>
  );
};

export default HomeProductGrid;
