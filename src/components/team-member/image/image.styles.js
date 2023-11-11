import styled from "styled-components";
import { GatsbyImage } from "gatsby-plugin-image";
import { motion } from "framer-motion";

export const ImageWrapper = styled(motion.div)`
  object-position: right top;
  max-height: 700px;
`;

export const Img = styled(GatsbyImage)`
  border-radius: 26px;
  max-height: 700px;

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
