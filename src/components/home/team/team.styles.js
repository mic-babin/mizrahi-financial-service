import { motion } from "framer-motion";
import { GatsbyImage } from "gatsby-plugin-image";
import { Link } from "gatsby-plugin-react-i18next";
import styled from "styled-components";

export const Wrapper = styled.div`
  padding-top: 120px;
  padding-bottom: 130px;
  border-bottom: 1px solid #2b2929;
  background-color: #eeede8;
  @media (max-width: 1249px) {
    padding-top: 70px;
  }
  @media (max-width: 767px) {
    padding-top: 20px;
    padding-bottom: 80px;
  }
`;

export const Grid = styled.div`
  display: grid;
  grid-template-columns: 44% 56%;
  @media (max-width: 991px) {
    display: block;
  }
`;

export const TitlehWrapper = styled.div`
  max-width: 82.1%;

  @media (max-width: 991px) {
    max-width: 90%;
  }

  @media (max-width: 767px) {
    max-width: 100%;
  }
`;

export const Paragraph = styled(motion.div)`
  padding-top: 20px;
  font-size: 32px;
  line-height: 46px;
  padding-right: 35px;
  font-family: "SF-Display-Light";

  @media (max-width: 1599px) {
    font-size: 30px;
    line-height: 41px;
  }

  @media (max-width: 1249px) {
    font-size: 28px;
    line-height: 38px;
    padding-top: 0px;
  }
  @media (max-width: 991px) {
    font-size: 28px;
    line-height: 38px;
    padding-right: 50px;
  }
  @media (max-width: 767px) {
    font-size: 22px;
    line-height: 32px;
    padding-top: 0px;
  }
  @media (max-width: 576px) {
    padding-right: 0;
  }
`;

export const CarouselWrapper = styled(motion.div)`
  position: relative;
  padding-left: 30px;

  .react-multi-carousel-item {
    opacity: 0.5;
  }
  .react-multi-carousel-item.react-multi-carousel-item--active {
    opacity: 1 !important;
  }
  @media (max-width: 991px) {
    padding-top: 150px;
    padding-left: 0;
  }
`;

export const Card = styled.div`
  padding: 0 1.9rem;
  position: relative;

  @media (max-width: 991px) {
    padding: 0px;
    padding-right: 3.8rem;
  }
  @media (max-width: 767px) {
    padding-right: 2.5rem;
  }
  @media (max-width: 576px) {
    padding-right: 2rem;
  }
`;

export const ImageWrapper = styled(Link)`
  object-position: right top;
  max-height: 700px;
`;

export const Image = styled(GatsbyImage)`
  border-radius: 26px;
  max-height: 700px;

  @media (max-width: 1249px) {
    max-height: 600px;
  }
  @media (max-width: 1099px) {
    max-height: 550px;
  }
  @media (max-width: 991px) {
    max-height: 600px;
  }
  @media (max-width: 767px) {
    max-height: 550px;
  }

  @media (max-width: 576px) {
    border-radius: 18px;
    max-height: 375px;
  }
`;

export const Name = styled.div`
  padding-top: 25px;
  padding-bottom: 15px;
  font-size: 42px;
  font-family: "TimesNow";

  h2 {
    display: inline;
    padding-top: 25px;
    padding-bottom: 15px;
    font-size: 42px;
    font-family: "TimesNow";
    margin: 0;
  }

  @media (max-width: 576px) {
    font-size: 30px;
  }

  span {
    display: block;
    font-size: 22px;
    font-style: italic;
  }
`;

export const Description = styled.div`
  font-family: "SF-Display-Light";
  font-size: 22px;
  line-height: 32px;

  ul {
    list-style: none;
    padding-left: 0;
  }

  li {
    padding-bottom: 8px;
  }

  @media (max-width: 1599px) {
    font-size: 20px;
    line-height: 32px;

    .pro-title {
      font-size: 16px;
      line-height: 27px;
    }
  }

  @media (max-width: 1249px) {
    font-size: 18px;
    line-height: 29px;
    .pro-title {
      font-size: 15px;
      line-height: 26px;
    }
  }

  @media (max-width: 767px) {
    font-size: 18px;
    line-height: 20px;

    li {
      font-size: 15px;
      line-height: 26px;
    }
  }
`;

export const Contact = styled.div`
  padding-top: 1rem;
  a {
    display: inline-block;
    margin-right: 2rem;
    font-family: "SF-Display-Light";
    font-size: 22px;
    line-height: 27px;
    color: #2b2929;
    /* text-decoration: none; */

    @media (max-width: 1599px) {
      font-size: 20px;
      line-height: 26px;
    }

    @media (max-width: 1249px) {
      font-size: 18px;
      line-height: 25px;
    }

    &:first-child {
      /* border-bottom: 1px solid #2b2929; */
    }

    &:hover {
      color: #2b2929;
    }
  }
`;

export const Cursor = styled(motion.div)`
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 150px;
  width: 150px;
  background-color: #f7f7f1;
  font-size: 14px;
  color: #2b2929;
  border-radius: 50%;
  transform: scale(0);
  text-transform: uppercase;
`;

export const FormButton = styled.button`
  font-size: 18px;
  font-weight: 500;
  color: #2b2929;
  padding: 5px;
  text-decoration: none;
  background-color: transparent;
  border: none;
  transition: all 0.2s ease-in;
`;

export const Arrow = styled.img`
  margin-left: 7px;
  height: 12px;
`;
