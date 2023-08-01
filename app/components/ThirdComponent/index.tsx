import React from "react";
import BoatImage from "../../assets/images/boat.jpeg";
import Image from "next/image";

export default function ThirdComponent() {
  return (
    <div className="w-full flex flex-col tablet:flex-row py-4 gap-x-8 justify-center items-center">
      <div className={`space-y-4 max-w-sm laptop:max-w-lg tablet:pt-2`}>
        <p className={`font-display text-30 laptop:text-32 font-extrabold leading-tight`}>
          Customize Your Perfect Getaway
        </p>
        <p className={`text-14 laptop:text-16 font-body leading-relaxed tablet:leading-relaxed laptop:leading-relaxed`}>
          Create a tailor-made itinerary that incorporates the best of Mamma
          Mia, visiting breathtaking sceneries and charming island towns.
        </p>
      </div>
      <div className="max-w-sm desktop:max-w-[25rem] max-h-96 flex justify-center pt-4">
        <Image src={BoatImage} alt="Beach Image" className="rounded-lg" />
      </div>
    </div>
  );
}
