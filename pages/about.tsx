import { QuoteIcon } from "@/app/assets/svgs";
import React, { ReactElement } from "react";
import Image from "next/image";
import "../app/styles/globals.css";
import Header from "../app/components/Header";
import Head from "next/head";

export default function About(): ReactElement {
  return (
    <>
      <Head>
        <title>Mamma Mia Tours</title>
      </Head>
      <Header />
      {/* never change anything with these custom padding values unless necessary */}
      <div className="mt-14 laptop:mt-16 space-y-6 tablet:space-y-4 desktop:space-y-2 px-6 tablet:px-8 laptop:px-10 desktop:px-52">
        <div>
          <h1
            className={`text-5xl tablet:text-6xl laptop:text-7xl flex flex-col items-center text-primaryPurple text-center tablet:text-left`}
            style={{ fontFamily: "Roboto, sans-serif" }}
          >
            ABOUT US.
          </h1>
          <div className="pt-4 inline-flex items-center justify-center w-full">
            <hr className="w-48 tablet:w-60 laptop:w-80 h-1 my-2 desktop:my-4 border-0 rounded bg-gray-200" />
            <div className="absolute px-4 -translate-x-1/2 left-1/2 bg-secondaryPurple rounded-lg items-center">
              <Image
                priority
                src={QuoteIcon}
                alt="Quote Icon"
                height={28}
                width={28}
              />
            </div>
          </div>
          {/* added custom px-10 for desktop screen res to align it in the center */}
          <div className="pt-6 tablet:pt-8 desktop:pt-10 pb-4 px-0 desktop:px-10">
            <h4
              className={`text-center tablet:text-left text-22 tablet:text-24 laptop:text-26 text-primaryPurple font-semibold leading-relaxed`}
              style={{ fontFamily: "Playfair Display, serif" }}
            >
              Our Adventurous Origin
            </h4>
            <p
              className={`text-center tablet:text-left pt-2 tablet:pt-4 text-14 tablet:text-16 leading-relaxed tablet:leading-relaxed laptop:leading-relaxed desktop:leading-relaxed desktop:text-16 text-gray-500`}
              style={{ fontFamily: "Playfair Display, serif" }}
            >
              Our company is driven by the wild and passionate hearts of a
              diverse team of travel enthusiasts. We strive to empower you with
              unforgettable journeys, and we {`can’t`} wait to be a part of your
              exciting globe-trotting adventures.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
