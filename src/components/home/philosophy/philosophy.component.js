import React from "react";
import { Wrapper } from "./philosophy.styles";
import SectionTitle from "../../common/section-title/section-title.component";
import PhilosophyCarousel from "./philosophy-carousel.component";

const Philosophy = ({ philosophy }) => {
  const { title, components } = philosophy;

  return (
    <>
      <div className="scroll-to" id="philosophie"></div>
      <Wrapper>
        <div className="container no-left">
          <SectionTitle title={title} />
          <PhilosophyCarousel components={components} />
        </div>
      </Wrapper>
    </>
  );
};

export default Philosophy;
