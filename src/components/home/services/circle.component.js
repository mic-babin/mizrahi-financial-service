import React from "react";
import { CircleWrapper } from "./accordion.styles";

const Circle = ({ open, hover }) => {
  return (
    <CircleWrapper>
      <div className={open || hover ? "wrap open" : "wrap"}>
        <div className={open ? "toggle " : "toggle open"}></div>
      </div>
    </CircleWrapper>
  );
};

export default Circle;
