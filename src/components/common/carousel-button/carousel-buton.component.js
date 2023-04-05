import React, { useState } from "react";
import { Button, Wrapper, Text } from "./carousel-button.styles";
import LeftSrc from "../../../assets/images/icons/left-arrow.svg";
import RightSrc from "../../../assets/images/icons/right-arrow.svg";
import { useIsSmall } from "../../../utils/media-query.hook";
import { useEffect } from "react";
const CarouselButton = ({
  current,
  setCurrent,
  next,
  previous,
  position,
  textRight,
  ...rest
}) => {
  const {
    onMove,
    carouselState: { currentSlide, deviceType },
  } = rest;

  const isSmall = useIsSmall();
  useEffect(() => {
    // setCurrent(currentSlide);
  }, [currentSlide]);

  return (
    <Wrapper style={position}>
      {!isSmall && (
        <Text style={textRight && { left: "160px" }}>En savoir plus</Text>
      )}
      <Button className="link" onClick={() => previous()}>
        <div>
          <img src={LeftSrc} alt="Left arrow" />
        </div>
      </Button>
      <Button className="link" onClick={() => next()}>
        <div>
          <img src={RightSrc} alt="Right arrow" />
        </div>
      </Button>
    </Wrapper>
  );
};

export default CarouselButton;
