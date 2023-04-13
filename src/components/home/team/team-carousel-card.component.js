import React, { useState, useRef } from "react";
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
import { useInnerElementMousePosition } from "../../../utils/inner-element-mouse-position.hook";

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

  const isSmall = useIsSmall();
  const card = useRef();
  const position = useInnerElementMousePosition(card);

  const [showCursor, setShowCursor] = useState(false);
  const [showModal, setShowModal] = useState(false);

  const toggleModal = () => setShowModal(!showModal);

  const isEven = (num) => num % 2 === 0;

  const toggleCursor = () => {
    if (isEven(index) === isEven(carousel.current.state.currentSlide)) {
      setShowCursor(!showCursor);
      document.querySelector("html").classList.toggle("no-cursor");
    }
  };

  return (
    <div key={id}>
      <Card ref={card} id={`card-${index}`}>
        <div>
          <ImageWrapper
            onClick={toggleModal}
            style={{ cursor: showCursor ? "none" : "pointer" }}
            onMouseEnter={toggleCursor}
            onMouseLeave={toggleCursor}
          >
            <Image image={getImage(image.gatsbyImageData)} alt="" />
            <AnimatePresence initial={false}>
              {showCursor && (
                <Cursor
                  style={{
                    left: position.left + "px",
                    top: position.top + "px",
                  }}
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
              {professionalTitles.map((title, index) => (
                <li key={index}>{title}</li>
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
          <FormButton className="mt-3 p-0 pt-1" onClick={toggleModal}>
            {bioButton}
            <Arrow src={ArrowSrc} alt="right-arrow" />
          </FormButton>
        )}
      </Card>
      <ModalCard show={showModal} onHide={toggleModal} centered size="lg">
        <ModalCard.Body className="p-5">
          <Name>
            {name}
            {title && ","} <span>{title}</span>
          </Name>
          <Description>{renderRichText(bio)}</Description>

          <ModalButton className="pe-3" onClick={toggleModal}>
            Fermer
          </ModalButton>
        </ModalCard.Body>
      </ModalCard>
    </div>
  );
};

export default TeamCarouselCard;
