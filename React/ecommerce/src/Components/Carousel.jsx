import React, { useState, useEffect } from "react";
import Image1 from "./../Assets/Image1.webp";
import Image2 from "./../Assets/Image2.webp";
import Image3 from "./../Assets/Image3.webp";
import Image4 from "./../Assets/Image4.webp";
import ChevronRight from "../Icons/ChevronRight";
import ChevronLeft from "../Icons/ChevronLeft";

const ImageArray = [Image1, Image2, Image3, Image4];

const Carousel = () => {
  const [index, setIndex] = useState(0);

  const handleRight = () => {
    setIndex((preIndex) => {
      if (preIndex == ImageArray.length - 1) {
        return 0;
      } else {
        return preIndex + 1;
      }
    });
  };

  const handleLeft = () => {
    setIndex((preIndex) => {
      if (preIndex == 0) {
        return ImageArray.length - 1;
      } else {
        return preIndex - 1;
      }
    });
  };

  useEffect(function () {
    setInterval(function () {
      handleRight();
    }, 1000);
  }, []);

  return (
    <div className="h-[60vh] w-screen relative">
      <img className="w-full h-full" src={ImageArray[index]} alt="" />
      <div onClick={handleLeft} className="bg-white absolute top-36">
        <ChevronLeft />
      </div>
      <div onClick={handleRight} className="bg-white absolute top-36 right-0">
        <ChevronRight />
      </div>
    </div>
  );
};

export default Carousel;
