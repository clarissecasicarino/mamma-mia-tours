import React, { ReactElement } from "react";
import { Roboto, Playfair_Display } from "next/font/google";
import "@/app/styles/globals.css";

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["100", "300", "400", "500", "700", "900"],
  variable: "--font-roboto",
  display: "swap",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-playfair-display",
  display: "swap",
});

export default function About(): ReactElement {
  return (
    <div className="mt-20 space-y-6 tablet:space-y-8">
      <h1
        className={`${roboto.variable} font-display text-6xl tablet:text-7xl laptop:text-8xl flex flex-col items-center text-primaryPurple text-center tablet:text-left`}
      >
        ABOUT.
      </h1>
      <hr className="h-px my-4 bg-gray-200 border-0 dark:bg-gray-200" />
      <div className="px-6 tablet:px-8 laptop:px-10 desktop:px-14 pt-0 tablet:pt-2 desktop:pt-4">
        <h4
          className={`${playfair.variable} text-center tablet:text-left font-body text-22 tablet:text-24 laptop:text-30 text-primaryPurple font-semibold leading-relaxed`}
        >
          Our Adventurous Origin
        </h4>
        <p
          className={`${playfair.variable} text-center tablet:text-left font-body pt-5 laptop:pt-8 text-14 tablet:text-16 leading-relaxed tablet:leading-relaxed laptop:leading-loose desktop:leading-loose desktop:text-16`}
        >
          Our company is driven by the wild and passionate hearts of a diverse
          team of travel enthusiasts. We strive to empower you with
          unforgettable journeys, and we {`can’t`} wait to be a part of your
          exciting globe-trotting adventures.
        </p>
      </div>
    </div>
  );
}
