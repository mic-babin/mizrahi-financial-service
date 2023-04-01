import { motion } from "framer-motion";
import { GatsbyImage } from "gatsby-plugin-image";
import styled from "styled-components";

export const Wrapper = styled.div`
  padding-top: 120px;
  padding-bottom: 130px;
  border-bottom: 1px solid #2b2929;
  background-color: #eeede8;

  @media (min-width: 768px) {
    .container.no-left {
      max-width: calc(100% - (100% - 720px) / 2) !important;
      margin-right: 0;
    }
  }

  @media (min-width: 992px) {
    .container.no-left {
      max-width: calc(100% - (100% - 960px) / 2) !important;
      margin-right: 0;
    }
  }

  @media (min-width: 1250px) {
    .container.no-left {
      max-width: calc(100% - (100% - 1190px) / 2) !important;
      margin-right: 0;
    }
  }
  @media (min-width: 1600px) {
    .container.no-left {
      max-width: calc(100% - (100% - 1550px) / 2) !important;
      margin-right: 0;
    }
  }
`;

export const Grid = styled.div`
  display: grid;
  grid-template-columns: 44% 56%;
`;

export const TitlehWrapper = styled.div`
  max-width: 82.1%;
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
`;

export const CarouselWrapper = styled.div`
  position: relative;
  padding-left: 30px;

  .react-multi-carousel-item {
    opacity: 0.5;
  }
  .react-multi-carousel-item.react-multi-carousel-item--active {
    opacity: 1 !important;
  }
`;

export const Card = styled.div`
  padding: 0 1.9rem;
  position: relative;
  cursor: default;
`;

export const ImageWrapper = styled.div`
  max-height: 700px;
`;

export const Image = styled(GatsbyImage)`
  border-radius: 26px;
  max-height: 700px;
`;

export const Name = styled.div`
  padding-top: 25px;
  padding-bottom: 15px;
  font-size: 42px;
  font-family: "TimesNow";

  span {
    font-size: 22px;
    font-style: italic;
    text-transform: lowercase;
  }
`;

export const Description = styled.div`
  font-family: "SF-Display-Light";
  font-size: 22px;
  line-height: 32px;
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
    text-decoration: none;

    &:first-child {
      border-bottom: 1px solid #2b2929;
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
`;
