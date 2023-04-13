import useMousePosition from "./mouse-position.hook";
import { useState, useEffect } from "react";

export const useInnerElementMousePosition = (card) => {
  const [innerPosition, setInnerPosition] = useState({ top: 0, left: 0 });
  const mousePosition = useMousePosition(true);

  useEffect(() => {
    const { x, y } = card.current.getBoundingClientRect();
    setInnerPosition({ top: mousePosition.y - y, left: mousePosition.x - x });
  }, [mousePosition]);

  return innerPosition;
};
