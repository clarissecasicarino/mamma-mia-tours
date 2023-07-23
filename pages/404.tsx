import React, { useCallback } from "react";
import MainIcon from "../app/assets/images/main-icon.png";
import Image from "next/image";
import Button from "@/app/components/Button";
import { useRouter } from "next/router";

export default function Custom404() {
  const router = useRouter();

  const navigateToHome = useCallback(() => {
    router.push("/");
  }, [router]);

  return (
    <div className="flex-col md:flex-row">
      <Image
        src={MainIcon}
        alt="Main Icon"
      />
      <div>
        <h1 className="font-display">Oops!</h1>
        <p className="font-body">
          Looks like {`you’ve`} entered the twilight zone of broken links.{" "}
          {`Don't`} fret; {`we'll`} get you back on track in a jiffy! Just click
          the button below and teleport back to our homepage like nothing ever
          happened.
        </p>
        <Button label="Back to Home" type="rectangle" onClick={navigateToHome} />
      </div>
    </div>
  );
}
