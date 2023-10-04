import React from "react";
import TopSrc from "../../../assets/images/logos/logo-top.svg";
import BottomSrcFr from "../../../assets/images/logos/logo-bottom-fr-v2.svg";
import BottomSrcEn from "../../../assets/images/logos/logo-bottom-en-v2.svg";
import {
  Wrapper,
  FrontLogo,
  BackLogo,
  LogoWrapper,
  Placeholder,
  FrontWrapper,
  BottomLogo,
} from "./intro.styles";
import { useI18next } from "gatsby-plugin-react-i18next";

const Intro = () => {
  const {
    i18n: { language },
  } = useI18next();
  return (
    <Wrapper>
      <LogoWrapper>
        <Placeholder src={TopSrc} alt="Mizrahi" />
        <BackLogo src={TopSrc} alt="Mizrahi" />
        <FrontWrapper>
          <Placeholder src={TopSrc} alt="Mizrahi" />
          <FrontLogo src={TopSrc} alt="Mizrahi" />
          <BottomLogo
            src={language === "fr" ? BottomSrcFr : BottomSrcEn}
            alt="Mizrahi"
          />
        </FrontWrapper>
      </LogoWrapper>
    </Wrapper>
  );
};

export default Intro;
