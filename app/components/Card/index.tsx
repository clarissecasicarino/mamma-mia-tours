import React, { ReactElement } from "react";
import CardList from "./mockData.json";
import Image from "next/image";

export default function Card(): ReactElement {
  return (
    <div className="flex flex-row justify-center space-x-4 tablet:space-x-6 laptop:space-x-8">
      {CardList.map((item, index) => (
        <div
          key={index}
          className={`rounded-3xl border h-80 w-44 laptop:w-64 bg-secondaryPurple`}
        >
          <div className="px-6 py-5 flex flex-col justify-center gap-y-2 h-full">
            <div
              style={{
                borderRadius: "50%",
                overflow: "hidden",
                width: "60px",
                height: "60px",
              }}
            >
              <Image
                src={item.imgUrl}
                width={60}
                height={60}
                objectFit="cover"
                alt="review-image"
              />
            </div>
            <p key={index} className="leading-relaxed tablet:leading-relaxed laptop:leading-relaxed font-body text-12 laptop:text-14 py-4">
              {item.description}
            </p>
            <p className="font-body text-10 mt-auto">{item.nameOfReviewer}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
