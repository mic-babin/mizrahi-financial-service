import React from "react";
import {
  Wrapper,
  H2,
  H1,
  TextWrapper,
  Images,
  Image,
  Col,
} from "./hero.styles";
import { getImage } from "gatsby-plugin-image";
import { renderRichText } from "gatsby-source-contentful/rich-text";
import { Parallax } from "react-scroll-parallax";

const Hero = ({ hero }) => {
  const { title, kicker } = hero.components.filter((c) => c.title != null)[0];
  const { images } = hero.components.filter((c) => c.images != null)[0];

  return (
    <>
      <div className="scroll-to" id="accueil"></div>

      <Wrapper>
        <TextWrapper>
          <H2
            whileInView={{ opacity: 1 }}
            initial={{ opacity: 0 }}
            transition={{
              duration: 0.75,
              delay: 0.2,
              type: "linear",
            }}
            viewport={{ once: true }}
          >
            {title}
          </H2>
          <H1
            whileInView={{ opacity: 1 }}
            initial={{ opacity: 0 }}
            transition={{
              duration: 0.75,
              delay: 0.4,
              type: "linear",
            }}
            viewport={{ once: true }}
          >
            {renderRichText(kicker)}
          </H1>
        </TextWrapper>
        <Images>
          <Col
            className="d-none d-md-block"
            whileInView={{ opacity: 1 }}
            initial={{ opacity: 0 }}
            transition={{
              duration: 0.75,
              delay: 0.6,
              type: "linear",
            }}
            viewport={{ once: true }}
          >
            <Parallax translateY={[35, 60]}>
              <Image
                image={getImage(images[0].gatsbyImageData)}
                alt="Sarah Mizrahi"
                loading="eager"
              />
            </Parallax>
          </Col>
          <Col
            className="d-none d-lg-block"
            whileInView={{ opacity: 1 }}
            initial={{ opacity: 0 }}
            transition={{
              duration: 0.75,
              delay: 0.8,
              type: "linear",
            }}
            viewport={{ once: true }}
          >
            <Parallax translateY={[-2, 15]}>
              <Image
                className="image-1"
                image={getImage(images[1].gatsbyImageData)}
                alt="Sarah Mizrahi"
                loading="eager"
              />

              <Image
                className="image-2"
                image={getImage(images[2].gatsbyImageData)}
                alt="Sarah Olivia Mizrahi"
                loading="eager"
              />
            </Parallax>
          </Col>
          <Col
            whileInView={{ opacity: 1 }}
            initial={{ opacity: 0 }}
            transition={{
              duration: 0.75,
              delay: 0.9,
              type: "linear",
            }}
            viewport={{ once: true }}
          >
            <Parallax translateY={[2, 5]}>
              <Image
                className="image-3"
                image={getImage(images[3].gatsbyImageData)}
                alt="David Mizrahi"
                loading="eager"
              />
            </Parallax>
          </Col>
          <Col
            whileInView={{ opacity: 1 }}
            initial={{ opacity: 0 }}
            transition={{
              duration: 0.75,
              delay: 1,
              type: "linear",
            }}
            viewport={{ once: true }}
            className="d-none d-md-block"
          >
            <Parallax translateY={[-5, 30]}>
              <Image
                className="image-4"
                image={getImage(images[4].gatsbyImageData)}
                alt="David Mizrahi"
                loading="eager"
              />

              <Image
                className="image-5"
                image={getImage(images[5].gatsbyImageData)}
                alt="David Mizrahi"
                loading="eager"
              />
            </Parallax>
          </Col>
          <Col
            whileInView={{ opacity: 1 }}
            initial={{ opacity: 0 }}
            transition={{
              duration: 0.75,
              delay: 1,
              type: "linear",
            }}
            viewport={{ once: true }}
            className="d-block d-md-none"
          >
            <Parallax translateY={[-5, 30]}>
              <Image
                className="image-6"
                image={getImage(images[5].gatsbyImageData)}
                alt="Sarah Olivia Mizrahi"
                loading="eager"
              />

              <Image
                className="image-7"
                image={getImage(images[0].gatsbyImageData)}
                alt="Sarah-Olivia Mizrahi"
                loading="eager"
              />
            </Parallax>
          </Col>
        </Images>
      </Wrapper>
    </>
  );
};

export default Hero;
