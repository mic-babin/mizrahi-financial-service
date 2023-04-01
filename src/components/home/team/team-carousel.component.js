import React, { useRef, useState, useEffect } from "react";
import Carousel from "react-multi-carousel";
import CarouselButton from "../../common/carousel-button/carousel-buton.component";
import { CarouselWrapper } from "./team.styles";
import TeamCarouselCard from "./team-carousel-card.component";

const TeamCarousel = ({ teamMember }) => {
  const { components } = teamMember;
  const carousel = useRef();

  const [buttonPosition, setButtonPosition] = useState({
    top: 0,
    left: 0,
  });

  useEffect(() => {
    const p = document.getElementById("paragraph");
    const c = document.getElementById("col");

    const handleResize = () => {
      setButtonPosition({
        left: c ? `calc(-${c.offsetWidth + 15}px)` : 0,
        top: p ? `calc(${p.offsetHeight + 60}px)` : 0,
      });
    };

    window.addEventListener("resize", handleResize);
    handleResize();
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1600 },
      items: 1,
      partialVisibilityGutter: 200, // this is needed to tell the amount of px that should be visible.
    },
    tablet: {
      breakpoint: { max: 1599, min: 1250 },
      items: 1,
      partialVisibilityGutter: 120, // this is needed to tell the amount of px that should be visible.
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      partialVisibilityGutter: 30, // this is needed to tell the amount of px that should be visible.
    },
  };

  return (
    <CarouselWrapper>
      <Carousel
        ref={carousel}
        partialVisible={true}
        renderButtonGroupOutside={true}
        responsive={responsive}
        infinite={true}
        autoPlaySpeed={1000}
        removeArrowOnDeviceType={["desktop", "tablet", "mobile"]}
        keyBoardControl={true}
        customButtonGroup={
          <CarouselButton position={buttonPosition} textRight={true} />
        }
      >
        {components &&
          components.map((item, index) => (
            <TeamCarouselCard
              key={item.id}
              item={item}
              index={index}
              carousel={carousel}
            />
          ))}
      </Carousel>
    </CarouselWrapper>
  );
};

export default TeamCarousel;
