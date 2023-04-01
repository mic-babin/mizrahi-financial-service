import { motion } from "framer-motion";
import { GatsbyImage } from "gatsby-plugin-image";
import styled from "styled-components";

export const Wrapper = styled.div`
  padding-bottom: 150px;
  border-bottom: 1px solid #2b2929;
`;

export const ImageWrapper = styled.div`
  width: 100%;
  border-radius: 26px;
`;
export const Image = styled(GatsbyImage)`
  width: 100%;
  border-radius: 26px;
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
`;

export const TopLine = styled(motion.div)`
  border-top: 1px solid #2b2929;
  max-width: 82%;
  padding-bottom: 10px;
`;
