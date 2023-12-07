import styled from "styled-components";
import { motion } from "framer-motion";

export const Name = styled(motion.div)`
  padding-top: 25px;
  padding-bottom: 15px;
  font-size: 42px;
  font-family: "TimesNow";

  h1 {
    display: inline;
    padding-top: 25px;
    padding-bottom: 15px;
    font-size: 42px;
    font-family: "TimesNow";
    margin: 0;
  }

  @media (max-width: 1249px) {
    padding-top: 0px;
    h1 {
      padding-top: 0px;
    }
  }
  @media (max-width: 576px) {
    h1 {
      font-size: 36px;
    }
  }

  h2 {
    display: block;
    font-size: 22px;
    font-style: italic;
  }
`;
export const Contact = styled(motion.div)`
  padding-top: 1rem;
  @media (max-width: 1249px) {
    padding-top: 0px;
  }
  a {
    display: inline-block;
    margin-right: 2rem;
    font-family: "SF-Display-Light";
    font-size: 22px;
    line-height: 27px;
    color: #2b2929;
    /* text-decoration: none; */

    @media (max-width: 1599px) {
      font-size: 20px;
      line-height: 26px;
    }

    @media (max-width: 1249px) {
      font-size: 18px;
      line-height: 25px;
    }

    &:first-child {
      /* border-bottom: 1px solid #2b2929; */
    }

    &:hover {
      color: #2b2929;
    }
  }
`;

export const DescriptionWrapper = styled(motion.div)`
  font-family: "SF-Display-Light";
  font-size: 22px;
  line-height: 32px;

  ul {
    list-style: none;
    padding-left: 0;
  }

  li {
    padding-bottom: 8px;
  }

  @media (max-width: 1599px) {
    font-size: 20px;
    line-height: 32px;

    .pro-title {
      font-size: 16px;
      line-height: 27px;
    }
  }

  @media (max-width: 1249px) {
    font-size: 18px;
    line-height: 29px;

    .pro-title {
      font-size: 15px;
      line-height: 26px;
    }
  }

  @media (max-width: 991px) {
    li {
      padding-bottom: 0px;
    }
  }

  @media (max-width: 767px) {
    font-size: 18px;
    line-height: 20px;

    li {
      font-size: 15px;
      line-height: 26px;
    }
  }

  @media (max-width: 575px) {
    li {
      padding-bottom: 8px;
    }
    ul {
      margin-bottom: 0;
    }
  }
`;
export const Bio = styled.div`
  padding: 1rem 0;
`;
