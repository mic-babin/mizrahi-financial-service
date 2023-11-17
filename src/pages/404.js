import * as React from "react";
import { graphql } from "gatsby";
import Layout from "../components/layout.component";
import { ParallaxProvider } from "react-scroll-parallax";
import { SEO } from "../components/seo";
import { useState, useEffect } from "react";

import Hero from "../components/home/hero/hero.component";
import About from "../components/home/about/about.component";
import Team from "../components/home/team/team.component";
import Philosophy from "../components/home/philosophy/philosophy.component";
import Services from "../components/home/services/services.component";
import Contact from "../components/home/contact/contact.component";
import Intro from "../components/home/intro/intro.component";
import { SlideProvider } from "../context/slide.context";

export default function Homepage(props) {
  const isBrowser = typeof window !== "undefined";
  const previousPath =
    isBrowser && JSON.parse(sessionStorage.getItem("previousPath"));

  const {
    data: {
      allContentfulSections,
      allContentfulContact,
      allContentfulNavLinks,
      allContentfulFooter,
    },
  } = props;

  const navLinks = allContentfulNavLinks.edges[0].node.links;
  const menu = allContentfulSections.edges.filter(
    (section) => section.node.title === "TopNav"
  );
  const services = allContentfulSections.edges.filter(
    (section) => section.node.title === "Services"
  )[0].node;
  const support = allContentfulSections.edges.filter(
    (section) =>
      section.node.title === "Notre démarche d’accompagnement" ||
      section.node.title === "Our support approach"
  )[0].node;
  const philosophy = allContentfulSections.edges.filter(
    (section) =>
      section.node.title === "Philosophie" ||
      section.node.title === "Philosophy"
  )[0].node;
  const team = allContentfulSections.edges.filter(
    (section) =>
      section.node.title === "L'équipe" || section.node.title === "The team"
  )[0].node;
  const teamMember = allContentfulSections.edges.filter(
    (section) =>
      section.node.title === "Membre de l'équipe" ||
      section.node.title === "Team member"
  )[0].node;
  const hero = allContentfulSections.edges.filter(
    (section) =>
      section.node.title === "Accueil" || section.node.title === "Home"
  )[0].node;
  const about = allContentfulSections.edges.filter(
    (section) =>
      section.node.title === "À propos" || section.node.title === "About us"
  )[0].node;
  const contact = allContentfulContact.edges[0].node;
  const footer = allContentfulFooter.nodes[0];

  const [showPage, setShowPage] = useState(false);

  useEffect(() => {
    if (previousPath) {
      if (
        previousPath.href.includes("8000") ||
        previousPath.href.includes("mizrahisf")
      ) {
        setShowPage(true);
        if (props.location.hash) {
          if (document.getElementById(props.location.hash.split("#")[1])) {
            const el = document.getElementById(
              props.location.hash.split("#")[1]
            );
            setTimeout(() => {
              el.scrollIntoView({ behavior: "smooth", block: "start" });
            }, 500);
          }
        }
      }
    }
    if (!showPage) {
      setTimeout(() => {
        setShowPage(true);
      }, 5500);
    }

    return () => {};
  }, [showPage]);

  return (
    <Layout menu={menu} navLinks={navLinks} showPage={showPage} footer={footer}>
      {!showPage && <Intro />}
      {showPage && (
        <SlideProvider>
          <ParallaxProvider>
            <Hero hero={hero} />
            <About about={about} />
            <Team team={team} teamMember={teamMember} />
            <Philosophy philosophy={philosophy} />
            <Services services={services} support={support} />
            <Contact contactData={contact} />
          </ParallaxProvider>
        </SlideProvider>
      )}
    </Layout>
  );
}

export const Head = () => <SEO />;

export const query = graphql`
  query ($language: String!) {
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
            ... on ContentfulHeaderAndText {
              id
              title
              kicker {
                raw
              }
              paragraphs {
                raw
              }
            }
            ... on ContentfulImages {
              id
              images {
                id
                gatsbyImageData(quality: 80)
              }
            }
            ... on ContentfulImage {
              id
              image {
                gatsbyImageData(quality: 80)
              }
            }
            ... on ContentfulTeamMember {
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
          }
        }
      }
    }
    allContentfulContact(filter: { node_locale: { eq: $language } }) {
      edges {
        node {
          id
          title
          address
          contact {
            id
            text
            url
            type
          }
          contactForm {
            id
            name
            type
            placeHolder
          }
        }
      }
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
  }
`;
