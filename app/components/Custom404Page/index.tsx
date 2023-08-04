import React, { useCallback } from "react";
import MainIcon from "../../assets/images/main-icon.png";
import Image from "next/image";
import { useRouter } from "next/router";
import styles from "./404.module.css";
import Button from "@/app/components/Button";
import "@/app/styles/globals.css";
import { Roboto, Playfair_Display } from "next/font/google";

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

function Custom404Page() {
  const router = useRouter();

  const navigateToHome = useCallback(() => {
    router.push("/");
  }, [router]);

  return (
    <div className="flex flex-col tablet:flex-row px-8 pt-16 gap-x-4">
      <div className="w-full tablet:w-1/2 flex justify-center">
        <Image src={MainIcon} alt="Main Icon" />
      </div>
      <div
        className={`space-y-4 ${styles["custom-404-text-container"]} max-w-sm laptop:max-w-lg pt-6 tablet:pt-2`}
      >
        <p
          className={`${roboto.variable} text-48 text-primaryPurple font-extrabold`}
        >
          Oops!
        </p>
        <p
          className={`${playfair.variable} text-16 pt-6 font-body leading-relaxed`}
        >
          Looks like {`you’ve`} entered the twilight zone of broken links.{" "}
          {`Don't`} fret; {`we'll`} get you back on track in a jiffy! Just click
          the button below and teleport back to our homepage like nothing ever
          happened.
        </p>
        <div className={`pt-2 ${playfair.variable}`}>
          <Button
            label="Take Me Home"
            type="special"
            onClick={navigateToHome}
          />
        </div>
      </div>
    </div>
  );
}

export default Custom404Page;