import { renderRichText } from "gatsby-source-contentful/rich-text";
import React, { useState } from "react";
import Carousel from "react-multi-carousel";
import CarouselButton from "../../common/carousel-button/carousel-buton.component";
import {
  CarouselWrapper,
  Item,
  Title,
  TitleTwo,
  Text,
  TextTwo,
  Button,
} from "./philosophy.styles";
import DownSrc from "../../../assets/images/icons/down-arrow.svg";
import UpSrc from "../../../assets/images/icons/up-arrow.svg";
import { useIsXLarge, useIsLarge } from "../../../utils/media-query.hook";

const PhilosophyCarousel = ({ components }) => {
  const isLarge = useIsLarge();

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
      whileInView={{ x: 0, opacity: 1 }}
      initial={{ x: 200, opacity: 0 }}
      transition={{
        duration: 0.4,
        delay: 0.3,
        type: "spring",
      }}
      viewport={{ once: true }}
    >
      <Carousel
        partialVisible={true}
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
          components.map((item, index) => {
            const isTwo = index === 1;
            const isThree = index === 2;

            return (
              <React.Fragment key={item.id}>
                {!isTwo && !isThree && (
                  <Item>
                    <Title>
                      <span>{`0${index + 1}`}</span>
                      <span>{item.title}</span>
                    </Title>
                    <Text>{renderRichText(item.paragraphs)}</Text>
                  </Item>
                )}
                {isTwo && <ItemTwo item={item} index={index} />}
                {isThree && <ItemThree item={item} index={index} />}
              </React.Fragment>
            );
          })}
      </Carousel>
    </CarouselWrapper>
  );
};

export default PhilosophyCarousel;

const ItemTwo = ({ item, index }) => {
  const [open, setOpen] = useState(false);
  const toggleOpen = () => {
    setOpen(!open);
  };

  const isXLarge = useIsXLarge();
  const getHeight = (open) => {
    if (open) {
      return isXLarge ? "670px" : "700px";
    } else {
      return isXLarge ? "190px" : "180px";
    }
  };

  return (
    <Item key={item.id}>
      <TitleTwo>
        <span>{`0${index + 1}`}</span>
        <span>{item.title}</span>
      </TitleTwo>
      <TextTwo style={{ height: getHeight(open) }}>
        {renderRichText(item.paragraphs)}
      </TextTwo>
      <Button onClick={() => toggleOpen()}>
        {open ? "RÉDUIRE" : "EN LIRE PLUS"}{" "}
        <img src={open ? UpSrc : DownSrc} alt="Arrow" />
      </Button>
    </Item>
  );
};
const ItemThree = ({ item, index }) => {
  const [open, setOpen] = useState(false);

  const toggleOpen = () => {
    setOpen(!open);
  };

  const isXLarge = useIsXLarge();
  const getHeight = (open) => {
    if (open) {
      return isXLarge ? "305px" : "350px";
    } else {
      return "190px";
    }
  };
  return (
    <Item key={item.id}>
      <Title>
        <span>{`0${index + 1}`}</span>
        <span>{item.title}</span>
      </Title>
      <TextTwo style={{ height: getHeight(open) }}>
        {renderRichText(item.paragraphs)}
      </TextTwo>
      <Button onClick={() => toggleOpen()}>
        {open ? "RÉDUIRE" : "EN LIRE PLUS"}{" "}
        <img src={open ? UpSrc : DownSrc} alt="Arrow" />
      </Button>
    </Item>
  );
};
