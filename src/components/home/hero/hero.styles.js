import { motion } from "framer-motion";
import styled from "styled-components";
import { GatsbyImage } from "gatsby-plugin-image";

export const Wrapper = styled.div`
  margin-top: 123px;
  max-width: 100%;
  overflow: hidden;
  padding-top: 250px;
  padding-bottom: 150px;

  @media (max-width: 1599px) {
    padding-top: 200px;
  }

  @media (max-width: 1249px) {
    padding-top: 150px;
  }
  @media (max-width: 991px) {
    padding-top: 100px;
    padding-bottom: 100px;
  }

  @media (max-width: 576px) {
    padding-bottom: 80px;
  }
`;

export const TextWrapper = styled.div`
  text-align: center;
  padding-bottom: 50px;
  @media (max-width: 767px) {
    padding-bottom: 25px;
  }
  @media (max-width: 576px) {
    padding-bottom: 0px;
  }
`;

export const H2 = styled(motion.h2)`
  font-size: 16px;
  letter-spacing: 3.2px;

  @media (max-width: 576px) {
    font-size: 14px;
    letter-spacing: 2.8px;
  }
`;
export const H1 = styled(motion.h1)`
  font-family: "TimesNow";
  font-size: 120px;
  margin: 20px 0;

  @media (max-width: 1249px) {
    font-size: 100px;
    line-height: 100px;
  }
  @media (max-width: 767px) {
    font-size: 75px;
    line-height: 75px;
  }
  @media (max-width: 576px) {
    font-size: 42px;
    line-height: 42px;
  }
`;

export const Images = styled.div`
  display: grid;
  grid-gap: 3%;
  grid-template-columns: 17% 19% 37% 27%;
  margin-left: -5%;

  @media (max-width: 991px) {
    grid-template-columns: 25% 42% 33%;
  }
  @media (max-width: 767px) {
    grid-gap: 17px;
    margin-left: 17px;
    grid-template-columns: calc(60% - 17px) calc(40% - 17px);
  }
`;

export const Col = styled(motion.div)`
  display: flex;
  flex-direction: column;
  height: 100%;
  justify-content: center;
`;

export const Image = styled(GatsbyImage)`
  width: 100%;
  border-radius: 26px;
  filter: grayscale(1);
  margin-bottom: 2.7vw;

  &.image-0 {
    height: 24.6vw;
    @media (max-width: 991px) {
      display: none;
    }
  }
  &.image-1 {
    height: 14.6vw;
    margin-top: 5.1vw;
    @media (max-width: 767px) {
      margin-top: 0vw;
    }
  }
  &.image-2 {
    height: 21.4vw;
  }
  &.image-3 {
    height: 43vw;
    margin-top: 8.3vw;

    @media (max-width: 767px) {
      height: auto;
      min-height: 53vh
      margin-top: 0vw;
    }
  }
  &.image-4 {
    height: 17.3vw;
    width: 15.8vw;
  }
  &.image-5 {
    height: 18.7vw;
  }
  &.image-6 {
    min-height: 17vh
  }
  &.image-7 {
    min-height: 20vh
  }
  @media (max-width: 767px) {
    border-radius: 22px;
  }
  @media (max-width: 576px) {
    border-radius: 18px;
  }
`;
