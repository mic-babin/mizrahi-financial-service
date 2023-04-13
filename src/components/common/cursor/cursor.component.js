import React from "react";
import AnimatedCursor from "react-animated-cursor";

const Cursor = () => {
  return (
    <AnimatedCursor
      innerSize={0}
      outerSize={15}
      outerScale={3}
      color="37, 91, 91"
      clickables={[
        "a",
        'input[type="text"]',
        'input[type="email"]',
        'input[type="number"]',
        'input[type="submit"]',
        'input[type="image"]',
        "label[for]",
        "select",
        "textarea",
        "button",
        ".link",
      ]}
      outerStyle={{
        backgroundColor: "var(--cursor-color)",
      }}
    />
  );
};

export default Cursor;
