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
} from "./team.styles";
import { ModalCard, ModalButton } from "../../common/modal/modal.styles";
import linkedInSrc from "../../../assets/images/icons/LinkedIn-Black.svg";
import { getImage } from "gatsby-plugin-image";
import { AnimatePresence } from "framer-motion";

import { renderRichText } from "gatsby-source-contentful/rich-text";

const TeamCarouselCard = ({ item, index, carousel }) => {
  const { id, name, title, description, email, linkedIn, image, bio } = item;
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
    if (shouldShow(index, carousel.current.state.currentSlide))
      setShowCursor(!showCursor);
  };

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
          {name}, <span>{title}</span>
        </Name>
        <Description>{description}</Description>
        <Contact>
          <a href={`mailto:${email}`}>{email}</a>
          <a href={linkedIn} target="_blank">
            <img src={linkedInSrc} alt="LinkedIn Logo" />
          </a>
        </Contact>
      </Card>
      <ModalCard show={showModal} onHide={handleClose} centered size="lg">
        <ModalCard.Body className="p-5">
          <Name>
            {name}, <span>{title}</span>
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
