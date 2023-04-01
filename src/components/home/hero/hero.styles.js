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
`;
export const TextWrapper = styled.div`
  text-align: center;

  padding-bottom: 50px;
`;

export const H2 = styled(motion.h2)`
  font-size: 16px;
  letter-spacing: 3.2px;
`;
export const H1 = styled(motion.h1)`
  font-family: "TimesNow";
  font-size: 120px;
  margin: 20px 0;
`;

export const Images = styled.div`
  display: grid;
  grid-gap: 3%;
  grid-template-columns: 17% 19% 37% 27%;
  margin-left: -5%;
`;

export const Col = styled.div`
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
  }
  &.image-1 {
    height: 14.6vw;
  }
  &.image-2 {
    height: 21.4vw;
  }
  &.image-3 {
    height: 43vw;
    margin-top: 8.3vw;
  }
  &.image-4 {
    height: 17.3vw;
    width: 15.8vw;
  }
  &.image-5 {
    height: 18.7vw;
  }
`;
