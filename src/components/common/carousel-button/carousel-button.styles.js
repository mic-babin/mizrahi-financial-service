import { motion } from "framer-motion";
import styled from "styled-components";

export const Button = styled.div`
  display: inline-flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;

  div {
    height: 70px;
    width: 70px;
    border-radius: 50%;
    border: 1px solid #2b2929;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-left: 15px;
    &:hover {
      background-color: #f7f7f1;
    }
  }
`;

export const Wrapper = styled.div`
  position: absolute;
`;

export const Text = styled.div`
  position: absolute;
  top: 22px;
  left: -250px;
  width: 200px;
  font-size: 14px;
  letter-spacing: 2.8px;
  text-transform: uppercase;
  padding-left: 50px;
`;
