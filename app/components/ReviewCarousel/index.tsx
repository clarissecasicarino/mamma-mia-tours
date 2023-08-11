"use client";
import React, { ReactElement } from "react";
import Card from "../Card";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { IconContext } from "react-icons";

export default function ReviewCarousel(): ReactElement {
  const scrollLeft = () => {
    const contentElement = document.getElementById("content");
    if (contentElement) {
      const scrollAmount = contentElement.scrollLeft - calculateScrollAmount();
      contentElement.scrollTo({
        left: scrollAmount,
        behavior: "smooth",
      });
    }
  };

  const scrollRight = () => {
    const contentElement = document.getElementById("content");
    if (contentElement) {
      const scrollAmount = contentElement.scrollLeft + calculateScrollAmount();
      contentElement.scrollTo({
        left: scrollAmount,
        behavior: "smooth",
      });
    }
  };

  const calculateScrollAmount = () => {
    const screenWidth = window.innerWidth;
    if (screenWidth >= 320 && screenWidth <= 767) {
      return 192;
    } else if (screenWidth >= 768 && screenWidth <= 1023) {
      return 300;
    } else {
      return 480;
    }
  };

  return (
    <div className="flex justify-center items-center">
      <button
        onClick={scrollLeft}
        className="flex items-center justify-center p-2 m-2 h-8 w-8 rounded-full bg-black hover:bg-primaryPurple active:bg-primaryPurple"
      >
        <IconContext.Provider value={{ color: "white" }}>
          <FaChevronLeft />
        </IconContext.Provider>
      </button>
      <div
        id="content"
        className="flex items-center overflow-x-auto py-6 scrollbar-hide"
      >
        <Card />
      </div>
      <button
        onClick={scrollRight}
        className="flex items-center justify-center p-2 m-2 h-8 w-8 rounded-full bg-black hover:bg-primaryPurple active:bg-primaryPurple"
      >
        <IconContext.Provider value={{ color: "white" }}>
          <FaChevronRight />
        </IconContext.Provider>
      </button>
    </div>
  );
}
