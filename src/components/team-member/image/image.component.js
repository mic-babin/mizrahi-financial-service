import React from "react";
import { ImageWrapper, Img } from "./image.styles";
import { getImage } from "gatsby-plugin-image";
const Image = ({ image }) => {
  return (
    <div>
      <ImageWrapper
        whileInView={{ opacity: 1 }}
        initial={{ opacity: 0 }}
        transition={{
          duration: 0.75,
          delay: 0.3,
          type: "linear",
        }}
        viewport={{ once: true }}
      >
        {image && (
          <Img
            style={{ objectPosition: "center center" }}
            image={getImage(image.gatsbyImageData)}
            alt={image.description}
          />
        )}
      </ImageWrapper>
    </div>
  );
};

export default Image;
