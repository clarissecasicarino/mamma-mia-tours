import { RefObject, useEffect, useState } from "react";

export function useHorizontalScroll(listRef: RefObject<HTMLDivElement>) {
  const [scrollRightReached, setScrollRightReached] = useState(false);
  const [scrollX, setScrollX] = useState(0);

  useEffect(() => {
    scrollCheck();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const slide = (shift: number) => {
    if (listRef?.current) {
      listRef.current.scrollLeft += shift;
      setScrollX(scrollX + shift);
    }
  };

  const scrollCheck = () => {
    if (listRef?.current) {
      setScrollX(listRef.current.scrollLeft);
      if (
        Math.floor(listRef.current.scrollWidth - listRef?.current.scrollLeft) <=
        listRef.current.offsetWidth
      ) {
        setScrollRightReached(true);
      } else {
        setScrollRightReached(false);
      }
    }
  };

  return { scrollRightReached, scrollX, scrollCheck, slide };
}