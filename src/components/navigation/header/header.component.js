import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import TopNav from "../top-nav/top-nav.component";
import MainNav from "../main-nav/main-nav.component";

const Header = ({ menu, navLinks }) => {
  return (
    <HeaderWrapper
      initial={{
        transform: "translateY(-200px)",
      }}
      animate={{ transform: "translateY(0px)" }}
      transition={{
        duration: 1.5,
        delay: 0, //TODO
        type: "tween",
        easeInOut: 0.3,
      }}
    >
      <TopNav menu={menu} />
      <MainNav navLinks={navLinks} />
    </HeaderWrapper>
  );
};

const HeaderWrapper = styled(motion.header)`
  position: fixed !important;
  top: 0;
  width: 100%;
  z-index: 10;
`;

export default Header;
