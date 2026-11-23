import React from "react";
import ProductCard from "./ProductCard";

const ProductGrid = ({ data }) => {
  //   console.log(data);
  return (
    <div>
      {data.map(function (productData) {
        return <ProductCard data={productData} />;
      })}
    </div>
  );
};

export default ProductGrid;
