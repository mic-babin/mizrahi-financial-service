import { renderRichText } from "gatsby-source-contentful/rich-text";
import React, { useState, useEffect, useContext } from "react";
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
  useIsXLarge,
  useIsLarge,
  useIsSmall,
  useIsXSmall,
} from "../../../utils/media-query.hook";
import { SlideContext } from "../../../context/slide.context";
import { useSetDimensionBrowserResize } from "../../../utils/set-dimension-browser-resize.hook";
import { Trans } from "gatsby-plugin-react-i18next";

const PhilosophyCarouselCard = ({ item, index }) => {
  return (
    <>
      {index === 0 && (
        <Item key={index}>
          <Title>
            <span>{`0${index + 1}`}</span>
            <span>{item.title}</span>
          </Title>
          <Text>{renderRichText(item.paragraphs)}</Text>
        </Item>
      )}
      {index !== 0 && <ItemTwo item={item} index={index} key={index} />}
    </>
  );
};

export default PhilosophyCarouselCard;

const ItemTwo = ({ item, index }) => {
  const [open, setOpen] = useState(false);
  const toggleOpen = () => {
    setOpen(!open);
  };
  const isXLarge = useIsXLarge();
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
        : isXLarge
        ? "250px"
        : "240px";
    }
  };

  const { active } = useContext(SlideContext);
  const { height } = useSetDimensionBrowserResize(`p-${index}`);

  useEffect(() => {
    setOpen(false);
  }, [active]);

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
        {open ? <Trans>minimize</Trans> : <Trans>readMore</Trans>}
        <img src={open ? UpSrc : DownSrc} alt="Arrow" />
      </Button>
    </Item>
  );
};
