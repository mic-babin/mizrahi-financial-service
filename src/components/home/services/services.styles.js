import { motion } from "framer-motion";
import styled from "styled-components";

export const Wrapper = styled.div`
  padding-top: 125px;
  padding-bottom: 200px;
  border-bottom: 1px solid #2b2929;

  @media (max-width: 1249px) {
    padding-bottom: 150px;
  }
  @media (max-width: 991px) {
    padding-top: 75px;
    padding-bottom: 100px;
  }
  @media (max-width: 767px) {
    padding-top: 50px;
    padding-bottom: 75px;
  }
  @media (max-width: 576px) {
    padding-top: 30px;
  }
`;
export const TitleWrapper = styled.div`
  max-width: 97%;
  @media (max-width: 1599px) {
    max-width: 95%;
  }
  @media (max-width: 1249px) {
    max-width: 97%;
  }
  @media (max-width: 991px) {
    max-width: 100%;
  }
`;

export const Paragraph = styled(motion.div)`
  font-family: "SF-Display-Light";
  font-size: 22px;
  line-height: 36px;
  padding-top: 35px;
  padding-bottom: 10px;
  @media (max-width: 1599px) {
    font-size: 20px;
    line-height: 32px;
  }

  @media (max-width: 1249px) {
    font-size: 18px;
    line-height: 29px;
    padding-top: 0px;
    padding-bottom: 0px;
  }

  h3 {
    font-size: 32px;
    line-height: 46px;
    padding-bottom: 30px;

    @media (max-width: 1599px) {
      font-size: 30px;
      line-height: 41px;
    }
    @media (max-width: 767px) {
      font-size: 26px;
      line-height: 35px;
    }
    @media (max-width: 576px) {
      font-size: 22px;
      line-height: 32px;
    }
  }
`;

export const LeftCol = styled.div`
  max-width: 60%;
  @media (max-width: 1249px) {
    max-width: 66.6%;
  }
  @media (max-width: 991px) {
    max-width: 90%;
  }
  @media (max-width: 767px) {
    max-width: 100%;
  }
`;
