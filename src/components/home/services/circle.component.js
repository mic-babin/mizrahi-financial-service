import React from "react";
import { CircleWrapper } from "./accordion.styles";

const Circle = ({ open }) => {
  return (
    <CircleWrapper>
      <div className={open ? "wrap open" : "wrap"}>
        <div className={open ? "toggle " : "toggle open"}></div>
      </div>
    </CircleWrapper>
  );
};

export default Circle;
