import React from "react";
import { Link } from "gatsby-plugin-react-i18next";

import LogoSrcFr from "../../../assets/images/logos/logo-fr.svg";
import LogoSrcEn from "../../../assets/images/logos/logo-en.svg";
import { Wrapper, Logo, LinkList, Button } from "./main-nav.styles";
import { useIsMedium } from "../../../utils/media-query.hook";
import Burger from "../burger/burger.component";
import { useI18next } from "gatsby-plugin-react-i18next";

const MainNav = ({ navLinks }) => {
  const isMedium = useIsMedium();
  const links = navLinks.filter((link) => link.url !== "#accueil");
  const {
    i18n: { language },
  } = useI18next();

  return (
    <Wrapper>
      <Link to="/">
        <Logo src={language === "fr" ? LogoSrcFr : LogoSrcEn} alt="Logo" />
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
