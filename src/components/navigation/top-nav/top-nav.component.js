import React from "react";
import Languages from "../languages/languages.component";
import { Links, Wrapper } from "./top-nav.styles";
import linkedInSrc from "../../../assets/images/icons/LinkedIn.svg";

const TopNav = ({ menu }) => {
  const link = menu[0].node.components[0].url;
  return (
    <Wrapper>
      <Links>
        <Languages />
        <a href={link} target="_blank" rel="noreferrer">
          <img src={linkedInSrc} alt="LinkedIn Logo" />
        </a>
      </Links>
    </Wrapper>
  );
};

export default TopNav;
