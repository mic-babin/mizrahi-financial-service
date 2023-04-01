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
    <Wrapper>
      <TextWrapper>
        <H2>{title}</H2>
        <H1>{renderRichText(kicker)}</H1>
      </TextWrapper>
      <Images>
        <Col>
          <Parallax translateY={[-3, 30]}>
            <Image
              className="image-0"
              image={getImage(images[0].gatsbyImageData)}
              alt=""
            />
          </Parallax>
        </Col>
        <Col>
          <Parallax translateY={[-2, 15]}>
            <Image
              className="image-1"
              image={getImage(images[1].gatsbyImageData)}
              alt=""
            />

            <Image
              className="image-2"
              image={getImage(images[2].gatsbyImageData)}
              alt=""
            />
          </Parallax>
        </Col>
        <Col>
          <Parallax translateY={[2, 5]}>
            <Image
              className="image-3"
              image={getImage(images[3].gatsbyImageData)}
              alt=""
            />
          </Parallax>
        </Col>
        <Col>
          <Parallax translateY={[-5, 30]}>
            <Image
              className="image-4"
              image={getImage(images[4].gatsbyImageData)}
              alt=""
            />

            <Image
              className="image-5"
              image={getImage(images[5].gatsbyImageData)}
              alt=""
            />
          </Parallax>
        </Col>
      </Images>
    </Wrapper>
  );
};

export default Hero;
