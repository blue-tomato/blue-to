import { useEffect, useRef, useState } from "react";

const getWidth = (el: HTMLElement) => el.getBoundingClientRect().width;

const useTable = () => {
  const [scroll, setScroll] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = ref.current;
    const table = container?.querySelector("table");

    if (!container || !table) return;

    const handleResize = () => {
      if (getWidth(container) < getWidth(table)) {
        setScroll(true);
      } else {
        setScroll(false);
      }
    };

    handleResize();

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return {
    ref,
    shouldShowScrollText: scroll,
  };
};

export default useTable;