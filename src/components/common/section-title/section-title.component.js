import React from "react";
import { H2 } from "./section-title.styles";
import { renderRichText } from "gatsby-source-contentful/rich-text";

const SectionTitle = ({ title, kicker, mb }) => {
  return (
    <H2 style={mb && { marginBottom: "40px" }}>
      {title && <span className="title">{title}</span>}
      {kicker && <span className="subtitle">{renderRichText(kicker)}</span>}
    </H2>
  );
};

export default SectionTitle;
