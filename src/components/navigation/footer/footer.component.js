import React from "react";
import {
  Logo,
  Wrapper,
  H3,
  LinkWrapper,
  Arrow,
  Copyrights,
  Conception,
} from "./footer.styles";
import LogoSrc from "../../../assets/images/logos/mz.svg";
import ArrowSrc from "../../../assets/images/icons/diagonal-arrow.svg";
import { renderRichText } from "gatsby-source-contentful/rich-text";

const Footer = ({ navLinks, footer }) => {
  const {
    conception,
    copyrights,
    entreprise,
    notes,
    plaintesEtDiffrents,
    plan,
  } = footer;

  return (
    <Wrapper>
      <div className="container">
        <div className="row">
          <div className="col-lg-6 d-flex flex-column justify-content-center text-center text-sm-start d-sm-block">
            <Logo src={LogoSrc} alt="Mizrahi Services Financiers" />
            <Copyrights>
              <div>{copyrights}</div>
              <div>{entreprise}</div>
              <Conception className="d-none d-sm-block">
                {renderRichText(conception)}
              </Conception>
            </Copyrights>
          </div>
          <div className="col-sm-6 col-lg-3 d-flex flex-column justify-content-center text-center text-sm-start d-sm-block">
            <H3>{plan}</H3>
            <div className="row">
              {navLinks &&
                navLinks.map((link) => (
                  <LinkWrapper
                    className="col-sm-6"
                    to={"/" + link.url}
                    key={link.id}
                  >
                    {link.text}
                  </LinkWrapper>
                ))}
            </div>
          </div>
          <div className="col-sm-6 col-lg-3 d-flex justify-content-sm-end pe-lg-5 d-flex flex-column justify-content-center text-center text-sm-start d-sm-block">
            <div>
              <H3>{notes}</H3>
              <LinkWrapper
                className="text-decoration-underline"
                as="a"
                target="blank"
                open
                href={plaintesEtDiffrents.image.publicUrl}
              >
                {plaintesEtDiffrents.image.title}
                <Arrow src={ArrowSrc} alt="left-arrow" />
              </LinkWrapper>
              <br/>
              <LinkWrapper
                className="text-decoration-underline"
                as="a"
                target="blank"
                open
                href="/Politique_Protection_des_renseignements_personnels_MSF.pdf         "
              >
                Protection des renseignements
                <Arrow src={ArrowSrc} alt="left-arrow" />
              </LinkWrapper>
              <Conception className="d-block d-sm-none">
                {renderRichText(conception)}
              </Conception>
            </div>
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

export default Footer;
