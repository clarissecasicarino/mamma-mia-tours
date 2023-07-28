"use client"

import React from "react";
import MainIcon from "../../assets/images/main-icon.png";
import Image from "next/image";
import Button from "../Button";
import styles from "./styles.module.css";
import { TypeAnimation } from "react-type-animation";

export default function FirstComponent() {
  return (
    <div className="flex flex-col laptop:flex-row pt-16 gap-x-4 justify-center">
      <div
        className={`space-y-4 ${styles["custom-404-text-container"]} laptop:max-w-md pt-2`}
      >
        <p
          className={`text-center tablet:text-left text-4xl pt-6 font-display leading-tight font-extrabold`}
        >
          <TypeAnimation
            sequence={[
                `Life is short, the world is wide.\nI want to make some memories.`,
                5000,
                '',
              ]}
            wrapper="span"
            speed={50}
            omitDeletionAnimation={true}
            repeat={Infinity}
          />
        </p>
        <div className={`flex justify-center tablet:justify-start`}>
          <Button label="Discover More" type="circular" />
        </div>
      </div>
      <div className="pt-6 w-full desktop:w-[29rem]">
        <Image src={MainIcon} alt="Main Icon" />
      </div>
    </div>
  );
}
