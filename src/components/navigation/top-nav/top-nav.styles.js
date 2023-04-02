import { motion } from "framer-motion";
import styled from "styled-components";

export const Wrapper = styled(motion.div)`
  background-color: #255b5b;
  font-size: 14px;
  letter-spacing: 2.8px;
  padding: 0.25rem 0;
`;

export const Links = styled.div`
  margin-top: -5px;
  padding-right: 70px;
  display: flex;
  justify-content: end;
  align-items: center;
  font-family: "SF-Display-Regular";

  @media (max-width: 1249px) {
    padding-right: 30px;
  }
`;
