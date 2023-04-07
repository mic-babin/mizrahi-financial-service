import React, { useRef } from "react";
import Carousel from "react-multi-carousel";
import CarouselButton from "../../common/carousel-button/carousel-buton.component";
import { CarouselWrapper } from "./philosophy.styles";
import { useIsLarge } from "../../../utils/media-query.hook";
import PhilosophyCarouselCard from "./philosophy-carousel-card.component";

const PhilosophyCarousel = ({ components }) => {
  const isLarge = useIsLarge();
  const carousel = useRef();

  const buttonPosition = { top: "-150px", right: isLarge ? "30px" : "70px" };
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1600 },
      items: 2,
      partialVisibilityGutter: 30, // this is needed to tell the amount of px that should be visible.
    },
    laptop: {
      breakpoint: { max: 1599, min: 1250 },
      items: 2,
      partialVisibilityGutter: 30, // this is needed to tell the amount of px that should be visible.
    },
    tablet: {
      breakpoint: { max: 1249, min: 992 },
      items: 1,
      partialVisibilityGutter: 200, // this is needed to tell the amount of px that should be visible.
    },
    mobile: {
      breakpoint: { max: 991, min: 577 },
      items: 1,
      partialVisibilityGutter: 50, // this is needed to tell the amount of px that should be visible.
    },
    phone: {
      breakpoint: { max: 576, min: 0 },
      items: 1,
      partialVisibilityGutter: -110, // this is needed to tell the amount of px that should be visible.
    },
  };

  return (
    <CarouselWrapper
      whileInView={{ opacity: 1 }}
      initial={{ opacity: 0 }}
      transition={{
        duration: 0.75,
        delay: 0.3,
        type: "linear",
      }}
      viewport={{ once: true }}
    >
      <Carousel
        partialVisible={true}
        ref={carousel}
        renderButtonGroupOutside={true}
        responsive={responsive}
        infinite={true}
        autoPlaySpeed={1000}
        removeArrowOnDeviceType={[
          "desktop",
          "laptop",
          "tablet",
          "mobile",
          "phone",
        ]}
        keyBoardControl={true}
        customButtonGroup={<CarouselButton position={buttonPosition} />}
      >
        {components &&
          components.map((item, index) => (
            <PhilosophyCarouselCard
              item={item}
              index={index}
              carousel={carousel}
            />
          ))}
      </Carousel>
    </CarouselWrapper>
  );
};

export default PhilosophyCarousel;
