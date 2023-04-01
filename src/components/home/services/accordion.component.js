import React, { useState } from "react";
import SectionTitle from "../../common/section-title/section-title.component";
import { Wrapper } from "./accordion.styles";
import AccordionItem from "./accordion-item";

const Accordion = ({ support }) => {
  const { title, components } = support;
  const [closeOthers, setCloseOthers] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  return (
    <Wrapper>
      <SectionTitle title={title} mb={true} />

      {components &&
        components.map((item, index) => {
          return (
            <AccordionItem
              key={item.id}
              index={index}
              item={item}
              closeOthers={closeOthers}
              setCloseOthers={setCloseOthers}
              currentIndex={currentIndex}
              setCurrentIndex={setCurrentIndex}
            />
          );
        })}
    </Wrapper>
  );
};

export default Accordion;
