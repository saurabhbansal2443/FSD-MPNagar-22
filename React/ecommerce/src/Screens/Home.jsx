import React from "react";
import Carousel from "../Components/Carousel";
import Navbar from "../Components/Navbar";
import HomeProductGrid from "../Components/HomeProductGrid";

const Home = () => {
  return (
    <div>
      <Navbar />
      <Carousel />
      <HomeProductGrid />
    </div>
  );
};

export default Home;
