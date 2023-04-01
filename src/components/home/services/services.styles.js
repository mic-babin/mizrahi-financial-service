import { motion } from "framer-motion";
import styled from "styled-components";

export const Wrapper = styled.div`
  padding-top: 125px;
  padding-bottom: 200px;
  border-bottom: 1px solid #2b2929;
`;
export const TitleWrapper = styled.div`
  max-width: 97%;
  @media (max-width: 1599px) {
    max-width: 95%;
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

  h6 {
    font-size: 32px;
    line-height: 46px;
    padding-bottom: 30px;

    @media (max-width: 1599px) {
      font-size: 30px;
      line-height: 41px;
    }
  }
`;

export const LeftCol = styled.div`
  max-width: 60%;
`;
