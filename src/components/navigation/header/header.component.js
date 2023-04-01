import React from "react";
// import Menu from "../menu.component";
// import { MenuButton } from "../../styled-components/menu-button.style";
// import LogoSrc from "../assets/img/trouve_blanc.svg";
// import HamburgerSrc from "../assets/img/hamburger.svg";
import styled from "styled-components";
import { Link } from "gatsby-plugin-react-i18next";
import { motion } from "framer-motion";
// import Contact from "../nous-joindre.component";
import { useIsSmall } from "../../../utils/media-query.hook";
import TopNav from "../top-nav/top-nav.component";
import MainNav from "../main-nav/main-nav.component";

const Header = ({ menu, showMenu, setShowMenu, navLinks }) => {
  const handleShowMenu = ({}) => setShowMenu(true);
  const isSmall = useIsSmall();

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
      {/* <div className="d-flex justify-content-between align-items-center">
      
        <MenuButton className="pe-2" onClick={handleShowMenu}>
          {isSmall ? <Hamburger src={HamburgerSrc} alt="Logo" /> : "MENU"}
        </MenuButton>
        <Menu
          showMenu={showMenu}
          setShowMenu={setShowMenu}
          menu={menu}
          path={path}
          contact={contact}
          setShowContact={setShowContact}
        />
        <Contact
          showContact={showContact}
          setShowContact={setShowContact}
          contact={contact}
        />
      </div>
      <HorizontalLine
        initial={{ width: "0vw" }}
        animate={{ width: "100vw" }}
        transition={{
          duration: 2,
          delay:
            headerColor === "transparent"
              ? 4.6
              : headerColor === "#000000"
              ? 2
              : 2,
          type: "tween",
          easeInOut: 0.3,
        }}
      /> */}
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
