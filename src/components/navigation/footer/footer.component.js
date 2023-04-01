import React from "react";
import {
  Logo,
  Wrapper,
  H3,
  LinkWrapper,
  Arrow,
  Copyrights,
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
          <div className="col-lg-6">
            <Logo src={LogoSrc} alt="" />
            <Copyrights>
              <div>{copyrights}</div>
              <div>{entreprise}</div>
              <div>{renderRichText(conception)}</div>
            </Copyrights>
          </div>
          <div className="col-lg-3">
            <H3>{plan}</H3>
            <div className="row">
              {navLinks &&
                navLinks.map((link) => (
                  <LinkWrapper className="col-lg-6" to={link.url} key={link.id}>
                    {link.text}
                  </LinkWrapper>
                ))}
            </div>
          </div>
          <div className="col-lg-3 d-flex justify-content-end pe-lg-5">
            <div>
              <H3>{notes}</H3>
              <LinkWrapper
                className="text-decoration-underline"
                as="a"
                target="blank"
                href={plaintesEtDiffrents.image.publicUrl}
              >
                {plaintesEtDiffrents.image.title}
                <Arrow src={ArrowSrc} alt="left-arrow" />
              </LinkWrapper>
            </div>
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

export default Footer;
