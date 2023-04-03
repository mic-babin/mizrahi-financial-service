import React from "react";
import { Wrapper, TitleWrapper, Paragraph, LeftCol } from "./services.styles";
import SectionTitle from "../../common/section-title/section-title.component";
import { renderRichText } from "gatsby-source-contentful/rich-text";
import Accordion from "./accordion.component";

const services = ({ services, support }) => {
  const { title, kicker, paragraphs } = services.components.filter(
    (c) => c.title != null
  )[0];

  return (
    <>
      <div className="scroll-to" id="services"></div>
      <Wrapper id="services">
        <div className="container">
          <TitleWrapper>
            <SectionTitle title={title} kicker={kicker} />
          </TitleWrapper>
          <div className="d-flex justify-content-end">
            <LeftCol>
              <Paragraph>{renderRichText(paragraphs)}</Paragraph>
              <Accordion support={support} />
            </LeftCol>
          </div>
        </div>
      </Wrapper>
    </>
  );
};

export default services;
