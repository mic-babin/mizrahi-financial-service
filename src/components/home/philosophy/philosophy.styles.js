import styled from "styled-components";
import { motion } from "framer-motion";

export const Wrapper = styled.div`
  padding-top: 15px;
  padding-bottom: 100px;
  border-bottom: 1px solid #2b2929;
  max-width: 100vw;
  overflow: hidden;

  @media (max-width: 991px) {
    padding-bottom: 75px;
  }
  @media (max-width: 767px) {
    padding-bottom: 50px;
  }
`;
export const CarouselWrapper = styled(motion.div)`
  position: relative;
  margin-top: 88px;

  @media (max-width: 1249px) {
    margin-top: 100px;
  }

  @media (max-width: 991px) {
    margin-top: 115px;
  }
  @media (max-width: 767px) {
    margin-top: 110px;
  }
  @media (max-width: 576px) {
    margin-top: 105px;
  }
`;

export const Item = styled.div`
  margin-right: 120px;
  padding-right: 60px;
  border-right: 1px solid #2b2929;
  height: 100%;

  @media (max-width: 1599px) {
    margin-right: 80px;
    padding-right: 40px;
  }
  @media (max-width: 767px) {
    margin-right: 60px;
    padding-right: 30px;
  }
`;

export const Title = styled.div`
  span:first-of-type {
    transform: translateY(-15px);
    border-radius: 50%;
    border: 1px solid #2b2929;
    display: inline-block;
    padding: 0.5rem 0.74rem;
    margin-right: 1rem;
  }
  span:nth-of-type(2) {
    display: inline;
    font-family: "TimesNow";
    font-size: 68px;
    line-height: 76px;
    @media (max-width: 1599px) {
      font-size: 51px;
      line-height: 57px;
    }
  }
  @media (max-width: 1599px) {
    max-width: 87%;
  }
`;
export const TitleTwo = styled(Title)`
  width: 300px;
  @media (max-width: 1599px) {
    width: 250px;
  }
`;

export const TextWrapper = styled.div`
  overflow: hidden;
  transition: all 0.3s ease;
`;

export const Text = styled.div`
  padding-right: 120px;
  margin-top: 50px;
  font-family: "SF-Display-Light";
  font-size: 18px;
  line-height: 30px;

  @media (max-width: 1599px) {
    margin-right: 16px;
    padding-right: 26px;
  }
`;

export const TextTwo = styled(Text)`
  transition: all 0.2s ease-in;
  overflow: hidden;
`;

export const Button = styled.button`
  padding: 0;
  margin-top: 30px;
  font-size: 16px;
  letter-spacing: 3.2px;
  background-color: transparent;
  border: none;
  text-transform: uppercase;
  img {
    margin-left: 12px;
  }
`;
