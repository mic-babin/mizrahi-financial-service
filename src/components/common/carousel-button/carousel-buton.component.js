import React, { useContext, useEffect } from "react";
import { Button, Wrapper, Text } from "./carousel-button.styles";
import LeftSrc from "../../../assets/images/icons/left-arrow.svg";
import RightSrc from "../../../assets/images/icons/right-arrow.svg";
import { useIsSmall } from "../../../utils/media-query.hook";
import { SlideContext } from "../../../context/slide.context";

const CarouselButton = ({ next, previous, position, textRight, ...rest }) => {
  const {
    carouselState: { currentSlide },
  } = rest;

  const isSmall = useIsSmall();
  const { setActive } = useContext(SlideContext);

  useEffect(() => {
    setActive(currentSlide);
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
