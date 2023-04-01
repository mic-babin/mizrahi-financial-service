import { motion } from "framer-motion";
import styled from "styled-components";

export const H2 = styled(motion.h2)`
  font-size: 68px;
  line-height: 76px;
  font-family: "TimesNow";
  position: relative;
  padding: 60px 0;

  @media (max-width: 1599px) {
    font-size: 51px;
    line-height: 59px;
  }

  p {
    text-indent: 250px;
  }

  .title {
    margin-left: 50px;
    font-size: 14px;
    letter-spacing: 2.8px;
    text-transform: uppercase;
    position: absolute;
    left: -20px;
    font-family: "SF-Display-Regular";

    &::before {
      content: "•";
      position: absolute;
      left: -20px;
      top: 0px;
    }
  }
`;
