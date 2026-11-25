import React, { useState, useEffect } from "react";
import ProductCard from "./ProductCard";
import ProductGridSkeleton from "../Skeleton/ProductGridSkeleton";

const ProductGrid = ({ slug }) => {
  const [productsData, setProductsData] = useState([]);
  const [loading, setLoading] = useState(true);
  async function getData() {
    try {
      setLoading(true);
      let apiData = await fetch(
        slug
          ? `https://dummyjson.com/products/${slug}`
          : `https://dummyjson.com/products`,
      );
      let data = await apiData.json();
      setProductsData(data.products);
    } catch (err) {
      console.log(err);
    } finally {
      setLoading(false);
    }
  }

  useEffect(function () {
    getData();
  }, []);

  if (loading) {
    return <ProductGridSkeleton />;
  }
  return (
    <div className="w-full px-6 py-8">
      {/* Heading */}
      <div className="mb-6 flex items-center justify-between">
        <div>
          {!slug && (
            <h2 className="text-2xl font-bold text-gray-900">
              Trending Products
            </h2>
          )}

          <p className="mt-1 text-sm text-gray-500">
            Explore our latest collection
          </p>
        </div>

        <span className="text-sm font-medium text-gray-500">
          {productsData.length} Products
        </span>
      </div>

      {/* Product Grid */}
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {productsData.map((productData) => (
          <ProductCard key={productData.id} data={productData} />
        ))}
      </div>
    </div>
  );
};

export default ProductGrid;
