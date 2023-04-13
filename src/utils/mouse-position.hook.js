import React from "react";

const useMousePosition = ({ includeTouch }) => {
  const isBrowser = typeof window !== "undefined";
  const [mousePosition, setMousePosition] = React.useState({
    x: null,
    y: null,
  });
  React.useEffect(() => {
    const updateMousePosition = (ev) => {
      let x, y;
      if (ev.touches) {
        const touch = ev.touches[0];
        [x, y] = [touch.clientX, touch.clientY];
      } else {
        [x, y] = [ev.clientX, ev.clientY];
      }
      setMousePosition({ x, y });
    };
    if (isBrowser) window.addEventListener("mousemove", updateMousePosition);
    if (includeTouch && isBrowser) {
      window.addEventListener("touchmove", updateMousePosition);
    }
    return () => {
      if (isBrowser)
        window.removeEventListener("mousemove", updateMousePosition);
      if (includeTouch && isBrowser) {
        window.removeEventListener("touchmove", updateMousePosition);
      }
    };
  }, [includeTouch, isBrowser]);
  return mousePosition;
};

export default useMousePosition;
