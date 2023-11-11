import * as React from "react";
import { graphql } from "gatsby";
import Layout from "../components/layout.component";
import { SEO } from "../components/seo";
import Image from "../components/team-member/image/image.component";
import styled from "styled-components";
import Description from "../components/team-member/description/description.component";
import { useIsMedium } from "../utils/media-query.hook";
import { Trans } from "react-i18next";
import { motion } from "framer-motion";
import { Link } from "gatsby-plugin-react-i18next";

export default function Homepage(props) {
  const {
    data: {
      allContentfulSections,
      allContentfulNavLinks,
      allContentfulFooter,
      contentfulTeamMember,
    },
  } = props;

  const teamMember = contentfulTeamMember;
  const image = contentfulTeamMember.image;
  const navLinks = allContentfulNavLinks.edges[0].node.links;
  const menu = allContentfulSections.edges.filter(
    (section) => section.node.title === "TopNav"
  );
  const footer = allContentfulFooter.nodes[0];

  const isMedium = useIsMedium();

  return (
    <Layout menu={menu} navLinks={navLinks} showPage={true} footer={footer}>
      <Container>
        <div className="container">
          <Wrapper>
            {!isMedium && <Image image={image} />}
            <Description teamMember={teamMember} />
            {isMedium && <Image image={image} />}
          </Wrapper>
          <BackWrapper
            whileInView={{ opacity: 1 }}
            initial={{ opacity: 0 }}
            transition={{
              duration: 0.75,
              delay: 0.7,
              type: "linear",
            }}
            viewport={{ once: true }}
          >
            <Back to={"/"}>
              <Trans>close</Trans>
            </Back>
          </BackWrapper>
        </div>
      </Container>
    </Layout>
  );
}

export const Head = (props) => {
  return <SEO title={props.pageContext.name} />;
};

const Wrapper = styled.section`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 100px;
  margin-top: 123px;
  overflow: hidden;
  padding-top: 100px;

  @media (max-width: 991px) {
    grid-template-columns: repeat(1, 1fr);
    padding-top: 50px;
  }

  @media (max-width: 576px) {
    grid-gap: 75px;
    padding-top: 0px;
    padding-bottom: 50px;
  }
`;

const Container = styled.div`
  border-bottom: 1px solid black;
`;

const BackWrapper = styled(motion.div)`
  margin-top: 25px;
  padding-bottom: 100px;
  width: 100%;
  @media (max-width: 576px) {
    padding-bottom: 50px;
  }
`;

const Back = styled(Link)`
  display: block;
  margin-left: auto;
  text-align: right;
  font-weight: bold;
  color: #2b2929;
  font-size: 20px;
  text-decoration: none;

  &:hover {
    color: #2b2929;
  }
`;

export const query = graphql`
  query ($language: String!, $name: String) {
    locales: allLocale(
      filter: { ns: { in: ["index"] }, language: { eq: $language } }
    ) {
      edges {
        node {
          ns
          data
          language
        }
      }
    }
    contentfulTeamMember(name: { eq: $name }) {
      id
      name
      title
      bio {
        raw
      }
      email
      linkedIn
      image {
        gatsbyImageData(quality: 80)
        description
      }
      professionalTitles
      bioButton
    }
    allContentfulNavLinks(filter: { node_locale: { eq: $language } }) {
      edges {
        node {
          links {
            id
            text
            url
            type
          }
        }
      }
    }
    allContentfulFooter(filter: { node_locale: { eq: $language } }) {
      nodes {
        id
        copyrights
        entreprise
        conception {
          raw
        }
        plan
        notes
        plaintesEtDiffrents {
          image {
            title
            publicUrl
          }
        }
      }
    }
    allContentfulSections(filter: { node_locale: { eq: $language } }) {
      edges {
        node {
          id
          title
          node_locale
          components {
            ... on ContentfulLink {
              id
              text
              url
            }
          }
        }
      }
    }
  }
`;
