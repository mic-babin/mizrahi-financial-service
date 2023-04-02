import { motion } from "framer-motion";
import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid #2b2929;
  padding-left: 70px;
  background-color: #e7e3da;
  @media (max-width: 1249px) {
    padding-left: 30px;
  }
  @media (max-width: 400px) {
    padding-left: 0px;
  }
`;

export const Logo = styled.img`
  height: 90px;
  @media (max-width: 576px) {
    height: 70px;
  }
`;

export const LinkList = styled.div`
  display: flex;
`;

export const Button = styled(motion.div)`
  width: 11vw;
  display: flex;
  align-items: center;
  justify-content: center;
  border-left: 1px solid #2b2929;

  @media (max-width: 1249px) {
    width: 12vw;
  }
  @media (max-width: 991px) {
    width: 120px;
  }
  @media (max-width: 576px) {
    width: 90px;
  }
  @media (max-width: 400px) {
    width: 80px;
  }

  .link {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100%;
    width: 100%;
    color: #2b2929;
    text-decoration: none;
    text-transform: uppercase;
    transition: all 0.2s ease;
    letter-spacing: 2.8px;

    &:hover {
      background-color: #f7f7f1;
    }

    @media (max-width: 1249px) {
      font-size: 12px;
      letter-spacing: 2.4px;
    }
  }
`;
