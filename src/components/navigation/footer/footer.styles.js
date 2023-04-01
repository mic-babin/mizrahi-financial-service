import { motion } from "framer-motion";
import { Link } from "gatsby-plugin-react-i18next";
import styled from "styled-components";

export const Wrapper = styled.div`
  border-bottom: 1px solid #2b2929;
  padding-top: 75px;
  padding-bottom: 60px;

  background-color: #e7e3da;
  @media (max-width: 767px) {
    padding-left: 30px;
  }
`;

export const Logo = styled.img`
  margin: -2.3rem;
  height: 179px;
  @media (max-width: 767px) {
    height: 70px;
  }
`;

export const H3 = styled(motion.h3)`
  font-size: 14px;
  letter-spacing: 2.8px;
  padding-top: 25px;
  padding-bottom: 1rem;
  text-transform: uppercase;
`;

export const LinkWrapper = styled(Link)`
  font-size: 18px;
  line-height: 20px;
  font-family: "SF-Display-Light";
  text-decoration: none;
  color: #2b2929;
  padding-bottom: 1rem;

  &:hover {
    color: #2b2929;
  }
`;

export const Arrow = styled.img`
  margin-left: 7px;
  height: 13px;
`;

export const Copyrights = styled.div`
  padding-top: 30px;
  font-size: 18px;
  line-height: 20px;
  font-family: "SF-Display-Light";
  text-decoration: none;
  color: #2b2929;
  div {
    padding-bottom: 0.5rem;
  }

  a {
    color: #2b2929;

    &:hover {
      color: #2b2929;
    }
  }
`;
