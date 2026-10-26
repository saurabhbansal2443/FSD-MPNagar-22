import React from "react";
import Image1 from "./../Assets/Image1.webp";
import Image2 from "./../Assets/Image2.webp";
import Image3 from "./../Assets/Image3.webp";
import Image4 from "./../Assets/Image4.webp";
import ChevronRight from "../Icons/ChevronRight";
import ChevronLeft from "../Icons/ChevronLeft";

const ImageArray = [Image1, Image2, Image3, Image4];

const Carousel = () => {
  return (
    <div className="h-[60vh] w-screen ">
      <img className="w-full h-full" src={Image1} alt="" />
      <div className="">
        <ChevronLeft />
      </div>
      <div className="">
        <ChevronRight />
      </div>
    </div>
  );
};

export default Carousel;
