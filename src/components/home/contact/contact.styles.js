import { motion } from "framer-motion";
import styled from "styled-components";

export const Wrapper = styled.div`
  padding-top: 200px;
  padding-bottom: 150px;
  border-bottom: 1px solid #2b2929;
  background-color: #eeede8;

  @media (max-width: 1249px) {
    padding-top: 150px;
    padding-bottom: 100px;
  }

  @media (max-width: 991px) {
    padding-top: 100px;
    padding-bottom: 75px;
  }

  @media (max-width: 767px) {
    padding-top: 75px;
    padding-bottom: 50px;
  }
`;

export const H2 = styled(motion.h2)`
  font-family: "TimesNow";
  font-size: 68px;
  line-height: 76px;
  @media (max-width: 576px) {
    font-size: 51px;
    line-height: 57px;
  }
`;

export const H3 = styled(motion.h3)`
  padding-top: 80px;
  font-size: 14px;
  letter-spacing: 2.8px;

  &:nth-of-type(2) {
    padding-top: 70px;
  }

  @media (max-width: 991px) {
    padding-top: 70px;

    &:nth-of-type(2) {
      padding-top: 60px;
    }
  }
  @media (max-width: 767px) {
    padding-top: 60px;

    &:nth-of-type(2) {
      padding-top: 50px;
    }
  }
  @media (max-width: 576px) {
    padding-top: 50px;

    &:nth-of-type(2) {
      padding-top: 40px;
    }
  }
`;

export const Address = styled.div`
  font-family: "SF-Display-Light";
  font-size: 22px;
  line-height: 36px;
  color: #2b2929;
  display: block;
  text-decoration: none;

  @media (max-width: 1599px) {
    font-size: 20px;
    line-height: 32px;
  }

  @media (max-width: 1249px) {
    font-size: 18px;
    line-height: 29px;
  }

  &:hover {
    color: #2b2929;
  }

  img {
    margin-top: 7px;
  }
`;
