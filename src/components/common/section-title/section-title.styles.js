import { motion } from "framer-motion";
import styled from "styled-components";

export const H2 = styled(motion.h2)`
  font-size: 68px;
  line-height: 76px;
  font-family: "TimesNow";
  position: relative;
  padding-top: 60px;
  padding-bottom: 60px;

  @media (max-width: 1599px) {
    font-size: 51px;
    line-height: 59px;
  }
  @media (max-width: 1249px) {
    padding-bottom: 45px;
  }

  @media (max-width: 991px) {
    font-size: 45px;
    line-height: 52px;
    padding-bottom: 30px;
  }

  @media (max-width: 767px) {
    font-size: 36px;
    line-height: 42px;
  }
  @media (max-width: 576px) {
    font-size: 30px;
    line-height: 34px;
  }

  p {
    text-indent: 250px;
    @media (max-width: 1599px) {
      text-indent: 225px;
    }
    @media (max-width: 1249px) {
      text-indent: 200px;
    }

    @media (max-width: 991px) {
      text-indent: 175px;
    }

    @media (max-width: 576px) {
      text-indent: 150px;
    }
  }

  .title {
    margin-left: 50px;
    font-size: 14px;
    letter-spacing: 2.8px;
    text-transform: uppercase;
    position: absolute;
    left: -20px;
    font-family: "SF-Display-Regular";
    @media (max-width: 767px) {
      top: 62px;
    }

    &::before {
      content: "•";
      position: absolute;
      left: -20px;
      top: 0px;
    }
  }
`;
