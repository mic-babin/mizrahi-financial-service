import { motion } from "framer-motion";
import styled from "styled-components";

export const Wrapper = styled(motion.div)`
  margin-top: 25px;
  cursor: pointer;

  @media (max-width: 576px) {
    margin-top: 0px;
  }
`;

export const Toggler = styled(motion.div)`
  width: 100%;
  padding: 2rem 1rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 48px;
  font-family: "TimesNow";

  @media (max-width: 1599px) {
    font-size: 36px;
  }

  @media (max-width: 767px) {
    font-size: 30px;
  }
  span {
    margin-right: 20px;
    font-size: 14px;
    font-family: "SF-Display-Regular";
  }
`;

export const Title = styled.div`
  display: flex;
  span {
    display: block;
    margin-top: 35px;
    @media (max-width: 1599px) {
      margin-top: 23px;
    }
    @media (max-width: 767px) {
      margin-top: 17px;
    }
  }
`;

export const Body = styled(motion.div)`
  overflow: hidden;
  padding-left: 50px;

  font-family: "SF-Display-Light";

  @media (max-width: 767px) {
    font-size: 16px;
    line-height: 27px;
  }
`;

export const ItemWrapper = styled.div`
  width: 100%;

  border-bottom: 1px solid #2b2929;

  &:first-of-type {
    border-top: 1px solid #2b2929;
  }
`;

export const CircleWrapper = styled.div`
  display: inline-block;
  margin-top: -10px;

  .wrap {
    width: 50px;
    height: 50px;
    border-radius: 50%;
    border: 1px solid #2b2929;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;

    &.open {
      background-color: #f7f7f1;
    }
  }

  .toggle {
    width: 25px;
    height: 1px;
    background: #2b2929;
    position: relative;
    transition: 0.25s all cubic-bezier(0.17, 0.67, 0.09, 0.97);

    &.open::after {
      transform: rotate(90deg);
      opacity: 1;
    }

    &.open {
      transform: rotate(90deg);
    }

    &::after {
      content: "";
      width: 25px;
      transition: 0.25s all cubic-bezier(0.17, 0.67, 0.09, 0.97);
      transition-delay: 0.1s;
      height: 1px;
      position: absolute;
      opacity: 0;
      background: #2b2929;
    }
  }
`;
