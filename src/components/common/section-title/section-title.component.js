import React from "react";
import { H2 } from "./section-title.styles";
import { renderRichText } from "gatsby-source-contentful/rich-text";
import { useIsXSmall } from "../../../utils/media-query.hook";

const SectionTitle = ({ title, kicker, mb }) => {
  const isXSmall = useIsXSmall();
  return (
    <H2 style={mb && { marginBottom: isXSmall ? "80px" : "40px" }}>
      {title && <span className="title">{title}</span>}
      {kicker && <span className="subtitle">{renderRichText(kicker)}</span>}
    </H2>
  );
};

export default SectionTitle;
