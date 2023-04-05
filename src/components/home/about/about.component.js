import React from "react";
import SectionTitle from "../../common/section-title/section-title.component";
import {
  Wrapper,
  Image,
  ImageWrapper,
  Paragraph,
  TopLine,
} from "./about.styles";
import { getImage } from "gatsby-plugin-image";
import { renderRichText } from "gatsby-source-contentful/rich-text";

const About = ({ about }) => {
  const { title, kicker, paragraphs } = about.components.filter(
    (c) => c.title != null
  )[0];
  const { image } = about.components.filter((c) => c.image != null)[0];

  return (
    <>
      <div className="scroll-to" id="a-propos"></div>
      <Wrapper>
        <div className="container">
          <TopLine>
            <SectionTitle title={title} kicker={kicker} />
          </TopLine>
          <div className="row px-0">
            <div className="col-lg-6">
              <ImageWrapper
                key={image.id}
                whileInView={{ opacity: 1 }}
                initial={{ opacity: 0 }}
                transition={{
                  duration: 0.75,
                  delay: 0.3,
                  type: "linear",
                }}
                viewport={{ once: true }}
              >
                <Image image={getImage(image.gatsbyImageData)} alt="" />
              </ImageWrapper>
            </div>
            <Paragraph
              className="col-lg-6"
              whileInView={{ opacity: 1 }}
              initial={{ opacity: 0 }}
              transition={{
                duration: 0.75,
                delay: 0.4,
                type: "linear",
              }}
              viewport={{ once: true }}
            >
              {renderRichText(paragraphs)}
            </Paragraph>
          </div>
        </div>
      </Wrapper>
    </>
  );
};

export default About;
