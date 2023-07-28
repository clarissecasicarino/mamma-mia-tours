import React, { useCallback } from "react";
import MainIcon from "../app/assets/images/main-icon.png";
import Image from "next/image";
import { useRouter } from "next/router";
import styles from "./404.module.css";
import Button from "@/app/components/Button";
import "@/app/styles/globals.css";

export default function NotFound() {
  const router = useRouter();

  const navigateToHome = useCallback(() => {
    router.push("/");
  }, [router]);

  return (
    <div className="flex-col md:flex-row">
      <Image src={MainIcon} alt="Main Icon" />
      <div>
        <h1 className={`${styles["roboto-font"]}`}>Oops!</h1>
        <p className={`${styles["playfair-font"]}`}>
          Looks like {`you’ve`} entered the twilight zone of broken links.{" "}
          {`Don't`} fret; {`we'll`} get you back on track in a jiffy! Just click
          the button below and teleport back to our homepage like nothing ever
          happened.
        </p>
        <Button
          label="Take Me Home"
          type="rectangle"
          onClick={navigateToHome}
        />
      </div>
    </div>
  );
}
