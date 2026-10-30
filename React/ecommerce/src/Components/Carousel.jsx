import React, { useState, useEffect, useRef } from "react";
import Image1 from "./../Assets/Image1.webp";
import Image2 from "./../Assets/Image2.webp";
import Image3 from "./../Assets/Image3.webp";
import Image4 from "./../Assets/Image4.webp";
import ChevronRight from "../Icons/ChevronRight";
import ChevronLeft from "../Icons/ChevronLeft";

const ImageArray = [Image1, Image2, Image3, Image4];

const Carousel = () => {
  const [index, setIndex] = useState(0);
  const timerRef = useRef(null);

  const handleRight = () => {
    setIndex((preIndex) => {
      if (preIndex == ImageArray.length - 1) {
        return 0;
      } else {
        return preIndex + 1;
      }
    });
    addTimer();
  };

  const handleLeft = () => {
    setIndex((preIndex) => {
      if (preIndex == 0) {
        return ImageArray.length - 1;
      } else {
        return preIndex - 1;
      }
    });
    addTimer();
  };

  const handleMouseEnter = () => {
    if (timerRef.current) {
      clearTimeout(timerRef.current);
    }
  };
  const handleMouseLeave = () => {
    addTimer();
  };

  const handleIndicatorClick = (idx) => {
    setIndex(() => {
      return idx;
    });
    addTimer();
  };

  function addTimer() {
    // This function is responsible to clear old timer and start a new one
    if (timerRef.current) {
      clearTimeout(timerRef.current);
    }
    timerRef.current = setInterval(function () {
      setIndex((preIndex) => {
        if (preIndex == ImageArray.length - 1) {
          return 0;
        } else {
          return preIndex + 1;
        }
      });
    }, 3000);
  }

  useEffect(function () {
    addTimer();
  }, []);

  return (
    <div
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className="h-[60vh] w-screen relative"
    >
      <img className="w-full h-full" src={ImageArray[index]} alt="" />
      <div onClick={handleLeft} className="bg-white absolute top-36">
        <ChevronLeft />
      </div>
      <div onClick={handleRight} className="bg-white absolute top-36 right-0">
        <ChevronRight />
      </div>
      <div className="bg-black flex  justify-evenly items-center absolute bottom-5 right-[46vw] h-3 w-20  opacity-35 rounded-md">
        {ImageArray.map(function (image, idx) {
          const selected = "h-2 w-2 rounded-xl border-1 border-white bg-white";
          const notSelected = "h-2 w-2 rounded-xl border-1 border-white ";
          return (
            <div
              onClick={() => {
                handleIndicatorClick(idx);
              }}
              key={idx}
              className={idx == index ? selected : notSelected}
            ></div>
          );
        })}
      </div>
    </div>
  );
};

export default Carousel;
