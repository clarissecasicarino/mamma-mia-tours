"use client";
import { QuoteIcon } from "@/app/assets/svgs";
import React, { ReactElement } from "react";
import Image from "next/image";

export default function About(): ReactElement {

  return (
    <div className="mt-14 laptop:mt-16 space-y-6 tablet:space-y-4 desktop:space-y-2">
      <h1
        className={`text-5xl tablet:text-6xl laptop:text-7xl flex flex-col items-center text-primaryPurple text-center tablet:text-left`}
        style={{ fontFamily: "Roboto, sans-serif" }}
      >
        ABOUT US.
      </h1>
      <div className="inline-flex items-center justify-center w-full">
        <hr className="w-44 tablet:w-56 laptop:w-80 h-1 my-2 desktop:my-4 border-0 rounded bg-gray-200" />
        <div className="absolute px-4 -translate-x-1/2 left-1/2 bg-secondaryPurple rounded-lg">
          <Image
            priority
            src={QuoteIcon}
            alt="Quote Icon"
            height={28}
            width={28}
          />
        </div>
      </div>
      <div className="px-6 tablet:px-8 laptop:px-10 desktop:px-14 pt-0 tablet:pt-4 pb-4">
        <h4
          className={`text-center tablet:text-left text-22 tablet:text-24 laptop:text-26 text-primaryPurple font-semibold leading-relaxed`}
          style={{ fontFamily: "Playfair Display, serif" }}
        >
          Our Adventurous Origin
        </h4>
        <p
          className={`text-center tablet:text-left pt-4 tablet:pt-6 text-14 tablet:text-16 leading-relaxed tablet:leading-relaxed laptop:leading-relaxed desktop:leading-relaxed desktop:text-16`}
          style={{ fontFamily: "Playfair Display, serif" }}
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
