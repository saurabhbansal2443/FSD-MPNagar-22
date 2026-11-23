import React from "react";
import Carousel from "../Components/Carousel";
import Navbar from "../Components/Navbar";
import HomeProductGrid from "../Components/HomeProductGrid";
import ProductGrid from "../Components/ProductGrid";

const Home = () => {
  return (
    <div>
      <Navbar />
      <Carousel />
      <HomeProductGrid />
      <ProductGrid />
    </div>
  );
};

export default Home;
