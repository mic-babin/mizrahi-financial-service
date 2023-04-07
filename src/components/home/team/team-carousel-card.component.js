import React, { useState, useEffect, useRef } from "react";
import useMousePosition from "../../../utils/use-mouse-position";
import {
  ImageWrapper,
  Card,
  Image,
  Name,
  Description,
  Contact,
  Cursor,
  Arrow,
  FormButton,
} from "./team.styles";
import { ModalCard, ModalButton } from "../../common/modal/modal.styles";
import linkedInSrc from "../../../assets/images/icons/LinkedIn-Black.svg";
import { getImage } from "gatsby-plugin-image";
import { AnimatePresence } from "framer-motion";

import { renderRichText } from "gatsby-source-contentful/rich-text";
import { useIsSmall } from "../../../utils/media-query.hook";
import ArrowSrc from "../../../assets/images/icons/diagonal-arrow.svg";

const TeamCarouselCard = ({ item, index, carousel }) => {
  const {
    id,
    name,
    title,
    email,
    linkedIn,
    image,
    bio,
    bioButton,
    professionalTitles,
  } = item;
  const [showCursor, setShowCursor] = useState(false);
  const [leftPosition, setLeftPosition] = useState(0);
  const [topPosition, setTopPosition] = useState(0);
  const [showModal, setShowModal] = useState(false);

  const card = useRef();
  const mousePosition = useMousePosition(true);

  const handleClose = () => setShowModal(false);
  const handleShow = () => setShowModal(true);

  const isEven = (num) => num % 2 === 0;
  const shouldShow = (index, currentSlide) =>
    isEven(index) === isEven(currentSlide);

  const toggleCursor = () => {
    if (shouldShow(index, carousel.current.state.currentSlide)) {
      setShowCursor(!showCursor);
      document.querySelector("html").classList.toggle("no-cursor");
    }
  };

  const isSmall = useIsSmall();

  useEffect(() => {
    const { x, y } = card.current.getBoundingClientRect();
    setTopPosition(mousePosition.y - y);
    setLeftPosition(mousePosition.x - x);
  }, [mousePosition]);

  return (
    <>
      <Card ref={card} key={id} id={`card-${index}`}>
        <div>
          <ImageWrapper
            onClick={() => handleShow()}
            style={{ cursor: showCursor ? "none" : "pointer" }}
            onMouseEnter={() => toggleCursor()}
            onMouseLeave={() => toggleCursor()}
          >
            <Image image={getImage(image.gatsbyImageData)} alt="" />
            <AnimatePresence initial={false}>
              {showCursor && (
                <Cursor
                  style={{ left: leftPosition + "px", top: topPosition + "px" }}
                  animate={{ transform: "scale(1)" }}
                  initial={{ transform: "scale(0)" }}
                  exit={{ transform: "scale(0)" }}
                  transition={{
                    duration: 0.2,
                    type: "ease",
                  }}
                >
                  LIRE BIO
                </Cursor>
              )}
            </AnimatePresence>
          </ImageWrapper>
        </div>
        <Name>
          {name}
          {title && ","} <span>{title}</span>
        </Name>
        <Description>
          {!isSmall && professionalTitles}
          {isSmall && (
            <ul>
              {professionalTitles.map((title) => (
                <li>{title}</li>
              ))}
            </ul>
          )}
        </Description>
        <Contact>
          <a href={`mailto:${email}`}>{email}</a>
          <a href={linkedIn} target="_blank" rel="noreferrer">
            <img src={linkedInSrc} alt="LinkedIn Logo" />
          </a>
        </Contact>
        {isSmall && (
          <FormButton className="mt-3 p-0 pt-1" onClick={() => handleShow()}>
            {bioButton}
            <Arrow src={ArrowSrc} alt="right-arrow" />
          </FormButton>
        )}
      </Card>
      <ModalCard show={showModal} onHide={handleClose} centered size="lg">
        <ModalCard.Body className="p-5">
          <Name>
            {name}
            {title && ","} <span>{title}</span>
          </Name>
          <Description>{renderRichText(bio)}</Description>

          <ModalButton className="pe-3" onClick={handleClose}>
            Fermer
          </ModalButton>
        </ModalCard.Body>
      </ModalCard>
    </>
  );
};

export default TeamCarouselCard;
