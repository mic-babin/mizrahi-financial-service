import { renderRichText } from "gatsby-source-contentful/rich-text";
import React from "react";
import SectionTitle from "../../common/section-title/section-title.component";
import TeamCarousel from "./team-carousel.component";
import { Paragraph, Wrapper, TitlehWrapper, Grid } from "./team.styles";

const Team = ({ team, teamMember }) => {
  const { title, kicker, paragraphs } = team.components.filter(
    (c) => c.title != null
  )[0];

  return (
    <Wrapper>
      <div className="container">
        <TitlehWrapper>
          <SectionTitle title={title} kicker={kicker} />
        </TitlehWrapper>
      </div>
      <div className="container no-left">
        <Grid>
          <div id="col">
            <Paragraph id="paragraph">{renderRichText(paragraphs)}</Paragraph>
          </div>

          <TeamCarousel teamMember={teamMember} colW={0} paragraphW={0} />
        </Grid>
      </div>
    </Wrapper>
  );
};

export default Team;
