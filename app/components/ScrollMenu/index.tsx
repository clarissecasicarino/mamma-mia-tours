"use client"
import { useEventListener } from "ahooks";
import React, { RefObject, useEffect, useState } from "react";
import { ReactElement, ReactNode, useRef } from "react";
import { useHorizontalScroll } from "../../hooks/horizontal-scroll";
import styles from "./styles.module.css";
import { FaChevronRight } from "react-icons/fa";

type Props = {
  children: ReactNode;
  style?: string;
  type: "small" | "large";
  removeLeftPadding?: boolean;
  externalRef?: RefObject<HTMLDivElement>;
};

function ScrollMenu({
  children,
  style,
  type,
  removeLeftPadding = false,
  externalRef,
}: Props): ReactElement {
  let listRef = useRef<HTMLDivElement>(null);
  if (externalRef) {
    listRef = externalRef;
  }
  const { scrollRightReached, scrollX, scrollCheck, slide } =
    useHorizontalScroll(listRef);
  const ref = useRef<HTMLDivElement>(null);
  const [width, setWidth] = useState(0);

  useEffect(() => {
    setWidth(listRef.current ? listRef.current.offsetWidth - 100 : 0);
  }, []);

  useEventListener("resize", () =>
    setWidth(listRef.current ? listRef.current.offsetWidth - 100 : 0),
  );
  const arrowCircleStyle =
    type === "small"
      ? "h-[50px] w-[50px] hover:h-[62px] hover:w-[62px]"
      : "h-[60px] w-[60px] hover:h-[72px] hover:w-[72px]";

  const sizeStyle =
    type === "small"
      ? "h-6 w-6 group-hover:h-8 group-hover:w-8"
      : "h-8 w-8 group-hover:h-10 group-hover:w-10";
  return (
    <div
      ref={ref}
      className={`${styles["parent"]} flex overflow-x-scroll scrollbar-hide`}
    >
      {scrollX !== 0 && (
        <div className={styles["child"]}>
          <div
            onClick={() => slide(-width)}
            className={`group absolute left-0 z-10 hidden items-center justify-center self-center rounded-full bg-white shadow-md hover:bg-electricBlue-500 sm:flex ${arrowCircleStyle}`}
          >
            <FaChevronRight
              className={`${sizeStyle} -ml-1 rotate-180 text-electricBlue-500 group-hover:text-white`}
            />
          </div>
        </div>
      )}
      <div
        ref={listRef}
        onScroll={scrollCheck}
        className={`flex flex-row overflow-x-scroll scroll-smooth ${
          !removeLeftPadding && "px-5"
        } scrollbar-hide sm:mx-5 sm:pl-0 ${style}`}
      >
        {children} 
      </div>
      {!scrollRightReached && (
        <div className={styles["child"]}>
          <div
            onClick={() => slide(width)}
            className={`group absolute right-0 z-10 hidden h-[60px] w-[60px] items-center justify-center self-center rounded-full bg-white shadow-md hover:h-[72px] hover:w-[72px] hover:bg-electricBlue-500 sm:flex ${arrowCircleStyle}`}
          >
            <FaChevronRight
              className={`${sizeStyle} -mr-1 text-electricBlue-500 group-hover:text-white`}
            />
          </div>
        </div>
      )}
    </div>
  );
}

export default ScrollMenu;