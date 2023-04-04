import { motion } from "framer-motion";
import { GatsbyImage } from "gatsby-plugin-image";
import styled from "styled-components";

export const Wrapper = styled.div`
  padding-bottom: 150px;
  border-bottom: 1px solid #2b2929;

  @media (max-width: 1249px) {
    padding-bottom: 75px;
  }
  @media (max-width: 767px) {
    padding-bottom: 50px;
  }
`;

export const ImageWrapper = styled(motion.div)`
  width: 100%;
`;
export const Image = styled(GatsbyImage)`
  width: 100%;
  border-radius: 26px;
  @media (max-width: 767px) {
    border-radius: 22px;
  }
  @media (max-width: 576px) {
    border-radius: 18px;
  }
`;

export const Paragraph = styled(motion.div)`
  padding-left: 70px !important;
  font-family: "SF-Display-Light";
  font-size: 22px;
  line-height: 36px;

  @media (max-width: 1599px) {
    font-size: 20px;
    line-height: 32px;
  }

  @media (max-width: 1249px) {
    font-size: 18px;
    line-height: 29px;
  }

  @media (max-width: 991px) {
    padding-top: 50px;
    padding-left: 15px !important;
    line-height: 29px;
  }
`;

export const TopLine = styled(motion.div)`
  border-top: 1px solid #2b2929;
  max-width: 82%;
  padding-bottom: 10px;

  @media (max-width: 991px) {
    max-width: 90%;
  }

  @media (max-width: 767px) {
    max-width: 100%;
  }
`;
