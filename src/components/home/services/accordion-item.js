import React from "react";
import { useState, useEffect } from "react";
import { useAnimationControls } from "framer-motion";
import { renderRichText } from "gatsby-source-contentful/rich-text";
import { Toggler, Body, ItemWrapper, Title } from "./accordion.styles";
import Circle from "./circle.component";
import { useIsXSmall, useIsMedium } from "../../../utils/media-query.hook";

const AccordionItem = ({ item, index, currentIndex, setCurrentIndex }) => {
  const { title, paragraphs } = item;

  const isXSmall = useIsXSmall();
  const isMedium = useIsMedium();
  const bodyControls = useAnimationControls();

  const [open, setOpen] = useState(false);
  const [hover, setHover] = useState(false);

  const toggleState = () => {
    setCurrentIndex(index);
    setOpen(!open);
  };

  useEffect(() => {
    if (!isMedium) {
      setOpen(currentIndex === index);
    }
    if (open) {
      // OPEN
      bodyControls.start({
        height: "100%",
        margin: "0.5rem 1rem 3rem",
      });
    } else {
      // CLOSED
      bodyControls.start({
        height: "0px",
        margin: "0rem 1rem",
      });
    }
  }, [open, bodyControls, currentIndex, index, isMedium]);

  return (
    <ItemWrapper
      onMouseOver={() => setHover(true)}
      onMouseOut={() => setHover(false)}
      className="link"
      onClick={() => toggleState(open)}
      whileInView={{ opacity: 1 }}
      initial={{ opacity: 0 }}
      transition={{
        duration: 0.75,
        delay: 0.3,
        type: "linear",
      }}
      viewport={{ once: true }}
    >
      <Toggler
        style={{ lineHeight: isXSmall && index === 3 && "30px" }}
        whileInView={{ opacity: 1 }}
        initial={{ opacity: 0 }}
        transition={{
          duration: 0.75,
          delay: 0.2,
          type: "linear",
        }}
        viewport={{ once: true }}
      >
        <Title>
          <span style={{ marginTop: isXSmall && index === 3 && "4px" }}>{`0${
            index + 1
          }.`}</span>
          {title}
        </Title>

        <Circle open={open} hover={hover} />
      </Toggler>
      <Body
        animate={bodyControls}
        transition={{
          duration: 0.3,
          delay: 0,
          type: "tween",
          easeInOut: 0.3,
        }}
      >
        {renderRichText(paragraphs)}
      </Body>
    </ItemWrapper>
  );
};

export default AccordionItem;
