import React from "react";
import { useState, useEffect } from "react";
import { useAnimationControls } from "framer-motion";
import { renderRichText } from "gatsby-source-contentful/rich-text";
import { Toggler, Body, ItemWrapper, Title } from "./accordion.styles";
import Circle from "./circle.component";
import { useIsXSmall } from "../../../utils/media-query.hook";

const AccordionItem = ({
  item,
  index,
  closeOthers,
  setCloseOthers,
  currentIndex,
  setCurrentIndex,
}) => {
  const { title, paragraphs } = item;
  const [open, setOpen] = useState(false);
  const toggleState = () => {
    setCurrentIndex(index);
    setOpen(!open);
  };
  const isXSmall = useIsXSmall();
  const bodyControls = useAnimationControls();
  console.log(isXSmall && index === 3);
  useEffect(() => {
    if (open) setCloseOthers(true);

    if (closeOthers && currentIndex !== index) setOpen(false);

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
  }, [open, bodyControls, closeOthers, currentIndex]);

  return (
    <ItemWrapper
      onClick={() => toggleState(open)}
      whileInView={{ y: 0, opacity: 1 }}
      initial={{ y: 200, opacity: 0 }}
      transition={{
        duration: 0.4,
        delay: 0.3,
        type: "spring",
      }}
      viewport={{ once: true }}
    >
      <Toggler
        style={{ lineHeight: isXSmall && index === 3 && "30px" }}
        whileInView={{ x: 0, opacity: 1 }}
        initial={{ x: -200, opacity: 0 }}
        transition={{
          duration: 0.4,
          delay: 0.2,
          type: "spring",
        }}
        viewport={{ once: true }}
      >
        <Title>
          <span style={{ marginTop: isXSmall && index === 3 && "4px" }}>{`0${
            index + 1
          }.`}</span>
          {title}
        </Title>

        <Circle open={open} />
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
