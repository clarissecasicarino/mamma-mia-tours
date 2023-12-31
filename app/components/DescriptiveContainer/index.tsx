import React from "react";
import BeachImage from "../../assets/images/beachfront.jpeg";
import Image from "next/image";

export default function DescriptiveContainer() {
  return (
    <div className="w-full flex flex-col tablet:flex-row py-4 gap-x-8 justify-center items-center">
      <div className="max-w-sm desktop:max-w-[34rem] max-h-96 flex justify-center">
        <Image src={BeachImage} alt="Beach Image" className="rounded-lg" />
      </div>
      <div className={`space-y-4 max-w-sm laptop:max-w-lg desktop:max-w-3xl pt-6 tablet:pt-2`}>
        <p className={`font-display text-30 laptop:text-32 font-extrabold leading-tight`}>
          Dance Your Way to Adventure
        </p>
        <p
          className={`text-14 laptop:text-16 font-body leading-relaxed tablet:leading-relaxed laptop:leading-relaxed desktop:pt-2`}
        >
          Experience the magic of Mamma Mia Here We Go Again as you embark on an
          unforgettable journey through remarkable destinations.
        </p>
      </div>
    </div>
  );
}
