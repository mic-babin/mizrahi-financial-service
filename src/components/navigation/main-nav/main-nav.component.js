import React from "react";
import { Link } from "gatsby-plugin-react-i18next";

import LogoSrcFr from "../../../assets/images/logos/logo-fr.svg";
import { Wrapper, Logo, LinkList, Button } from "./main-nav.styles";
import { useIsMedium } from "../../../utils/media-query.hook";
import Burger from "../burger/burger.component";

const MainNav = ({ navLinks }) => {
  const isMedium = useIsMedium();
  const links = navLinks.filter((link) => link.url !== "#accueil");

  return (
    <Wrapper>
      <Link to="/">
        <Logo src={LogoSrcFr} alt="Logo" />
      </Link>
      <LinkList>
        {navLinks &&
          !isMedium &&
          links.map((link) => (
            <Button key={link.id}>
              <Link to={link.url} className="link">
                {link.text}
              </Link>
            </Button>
          ))}
        {isMedium && (
          <Button>
            <Burger navLinks={navLinks} />
          </Button>
        )}
      </LinkList>
    </Wrapper>
  );
};

export default MainNav;
