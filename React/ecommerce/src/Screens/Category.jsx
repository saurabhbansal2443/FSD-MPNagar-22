import React from "react";
import { useParams } from "react-router-dom";
import ProductGrid from "../Components/ProductGrid";
import Navbar from "../Components/Navbar";

const Category = () => {
  const { slug } = useParams();
  return (
    <div>
      <Navbar></Navbar>
      <ProductGrid slug={`/category/${slug}`} />
    </div>
  );
};

export default Category;
