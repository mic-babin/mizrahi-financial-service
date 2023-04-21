import React from "react";
import { H2 } from "./section-title.styles";
import { renderRichText } from "gatsby-source-contentful/rich-text";
import { useIsXSmall } from "../../../utils/media-query.hook";

const SectionTitle = ({ title, kicker, mb, pa }) => {
  const isXSmall = useIsXSmall();
  console.log(pa && isXSmall);
  return (
    <H2
      style={
        (mb && {
          marginBottom: isXSmall ? "0px" : "40px",
          lineHeight: isXSmall && "24px",
        }) ||
        (pa && {
          paddingTop: isXSmall && "60px",
        })
      }
      whileInView={{ opacity: 1 }}
      initial={{ opacity: 0 }}
      transition={{
        duration: 0.75,
        delay: 0.2,
        type: "linear",
      }}
      viewport={{ once: true }}
    >
      {title && <span className="title">{title}</span>}
      {kicker && <span className="subtitle">{renderRichText(kicker)}</span>}
    </H2>
  );
};

export default SectionTitle;
