import React from "react";
import { Link } from "gatsby-plugin-react-i18next";

import LogoSrcFr from "../../../assets/images/logos/logo-fr.svg";
import { Wrapper, Logo, LinkList, Button } from "./main-nav.styles";

const MainNav = ({ navLinks }) => {
  const links = navLinks.filter((link) => link.url !== "#accueil");
  return (
    <Wrapper>
      <Link to="/">
        <Logo src={LogoSrcFr} alt="Logo" />
      </Link>
      <LinkList>
        {navLinks &&
          links.map((link) => (
            <Button key={link.id}>
              <Link to={link.url} className="link">
                {link.text}
              </Link>
            </Button>
          ))}
      </LinkList>
    </Wrapper>
  );
};

export default MainNav;
