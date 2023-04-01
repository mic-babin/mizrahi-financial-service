import { motion } from "framer-motion";
import styled from "styled-components";

export const Wrapper = styled.div`
  padding-top: 200px;
  padding-bottom: 150px;
  border-bottom: 1px solid #2b2929;
  background-color: #eeede8;
`;

export const H2 = styled(motion.h2)`
  font-family: "TimesNow";
  font-size: 68px;
  line-height: 76px;
`;

export const H3 = styled(motion.h3)`
  padding-top: 80px;
  font-size: 14px;
  letter-spacing: 2.8px;

  &:nth-of-type(2) {
    padding-top: 70px;
  }
`;

export const Address = styled.div`
  font-family: "SF-Display-Light";
  font-size: 22px;
  line-height: 36px;
  color: #2b2929;
  display: block;
  text-decoration: none;

  &:hover {
    color: #2b2929;
  }

  img {
    margin-top: 7px;
  }
`;
