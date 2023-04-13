import React, { useState, useEffect } from "react";

export const useSetDimensionBrowserResize = (element) => {
  const isBrowser = typeof window !== "undefined";
  const [dimension, setDimension] = useState({ height: 0, width: 0 });

  useEffect(() => {
    const el = document.getElementById(element);
    const handleResize = () => {
      setDimension({ height: el.offsetHeight, width: el.offsetWidth });
    };

    if (isBrowser) window.addEventListener("resize", handleResize);
    handleResize();
    return () => {
      if (isBrowser) window.removeEventListener("resize", handleResize);
    };
  }, []);

  return dimension;
};
