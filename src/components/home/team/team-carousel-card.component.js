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
import { useIsMedium, useIsSmall } from "../../../utils/media-query.hook";
import ArrowSrc from "../../../assets/images/icons/diagonal-arrow.svg";
import { useInnerElementMousePosition } from "../../../utils/inner-element-mouse-position.hook";
import { Trans, useI18next } from "gatsby-plugin-react-i18next";
import slugify from "react-slugify";

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
  const isMedium = useIsMedium();
  const card = useRef();
  const position = useInnerElementMousePosition(card);
  const {
    i18n: { language },
  } = useI18next();

  const slug = slugify(name);
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
            to={"/" + slugify(name)}
            style={{ cursor: showCursor ? "none" : "pointer" }}
            onMouseEnter={toggleCursor}
            onMouseLeave={toggleCursor}
          >
            {image && (
              <Image
                style={{ objectPosition: "center center" }}
                image={getImage(image.gatsbyImageData)}
                alt={name}
              />
            )}
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
                  <Trans>readBio</Trans>
                </Cursor>
              )}
            </AnimatePresence>
          </ImageWrapper>
        </div>
        {name && (
          <Name>
            <h2>{name}</h2>,{title && <span>{title}</span>}
          </Name>
        )}
        {professionalTitles && (
          <Description>
            <div></div>
            {!isMedium &&
              professionalTitles &&
              professionalTitles.map((title, index) => (
                <div key={index} className="pro-title">
                  {title}
                </div>
              ))}
            {isMedium && (
              <ul>
                {!isSmall &&
                  professionalTitles.map((title, index) => (
                    <li key={index}>{title}</li>
                  ))}
                {isSmall &&
                  professionalTitles.map((title, index) => {
                    let titleArr = title.split(",");
                    if (titleArr.length !== 2) {
                      return <li key={index}>{title}</li>;
                    } else {
                      return (
                        <li key={index}>
                          {titleArr[0]},
                          <br />
                          {titleArr[1]}
                        </li>
                      );
                    }
                  })}
              </ul>
            )}
          </Description>
        )}
        <Contact>
          {email && <a href={`mailto:${email}`}>{email}</a>}
          {linkedIn && (
            <a href={linkedIn} target="_blank" rel="noreferrer">
              <img src={linkedInSrc} alt="LinkedIn Logo" />
            </a>
          )}
        </Contact>
        {isMedium && bioButton && (
          <FormButton className="mt-3 p-0 pt-1" onClick={toggleModal}>
            {bioButton}
            <Arrow src={ArrowSrc} alt="right-arrow" />
          </FormButton>
        )}
      </Card>
    </div>
  );
};

export default TeamCarouselCard;
