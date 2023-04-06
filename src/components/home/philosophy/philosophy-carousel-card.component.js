import { renderRichText } from "gatsby-source-contentful/rich-text";
import React, { useState, useEffect } from "react";
import {
  Item,
  Title,
  TitleTwo,
  Text,
  TextTwo,
  Button,
  TextWrapper,
} from "./philosophy.styles";
import DownSrc from "../../../assets/images/icons/down-arrow.svg";
import UpSrc from "../../../assets/images/icons/up-arrow.svg";
import {
  useIsLarge,
  useIsSmall,
  useIsXSmall,
} from "../../../utils/media-query.hook";

const PhilosophyCarouselCard = ({ item, index, next, previous }) => {
  return (
    <React.Fragment key={item.id}>
      {index === 0 && (
        <Item>
          <Title>
            <span>{`0${index + 1}`}</span>
            <span>{item.title}</span>
          </Title>
          <Text>{renderRichText(item.paragraphs)}</Text>
        </Item>
      )}
      {index !== 0 && <ItemTwo item={item} index={index} />}
    </React.Fragment>
  );
};

export default PhilosophyCarouselCard;
const isBrowser = typeof window !== "undefined";
const ItemTwo = ({ item, index }) => {
  const [open, setOpen] = useState(false);
  const toggleOpen = () => {
    setOpen(!open);
  };
  const isLarge = useIsLarge();
  const isSmall = useIsSmall();
  const isXSmall = useIsXSmall();
  const getHeight = (open) => {
    if (open) {
      return `${height + 40}px`;
    } else {
      return isXSmall
        ? "300px"
        : isSmall
        ? "250px"
        : isLarge
        ? "180px"
        : "250px";
    }
  };

  const [height, setHeight] = useState(0);

  useEffect(() => {
    const p = document.getElementById(`p-${index}`);
    const handleResize = () => {
      setHeight(p.offsetHeight);
    };

    if (isBrowser) window.addEventListener("resize", handleResize);
    handleResize();
    return () => {
      if (isBrowser) window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <Item key={item.id}>
      {index === 1 && (
        <TitleTwo>
          <span>{`0${index + 1}`}</span>

          <span>{item.title}</span>
        </TitleTwo>
      )}
      {index !== 1 && (
        <Title>
          <span>{`0${index + 1}`}</span>
          <span>{item.title}</span>
        </Title>
      )}
      <TextWrapper style={{ height: getHeight(open) }}>
        <TextTwo id={`p-${index}`}>{renderRichText(item.paragraphs)}</TextTwo>
      </TextWrapper>
      <Button onClick={() => toggleOpen()}>
        {open ? "RÉDUIRE" : "EN LIRE PLUS"}{" "}
        <img src={open ? UpSrc : DownSrc} alt="Arrow" />
      </Button>
    </Item>
  );
};
