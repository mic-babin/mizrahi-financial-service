import { motion } from "framer-motion";
import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid #2b2929;
  padding-left: 70px;
  background-color: #e7e3da;
  @media (max-width: 767px) {
    padding-left: 30px;
  }
`;

export const Logo = styled.img`
  height: 90px;
  @media (max-width: 767px) {
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
  }
`;
