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

export default function Homepage(props) {
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
    (section) => section.node.title === "Notre démarche d’accompagnement"
  )[0].node;
  const philosophy = allContentfulSections.edges.filter(
    (section) => section.node.title === "Philosophie"
  )[0].node;
  const team = allContentfulSections.edges.filter(
    (section) => section.node.title === "L'équipe"
  )[0].node;
  const teamMember = allContentfulSections.edges.filter(
    (section) => section.node.title === "Membre de l'équipe"
  )[0].node;
  const hero = allContentfulSections.edges.filter(
    (section) => section.node.title === "Accueil"
  )[0].node;
  const about = allContentfulSections.edges.filter(
    (section) => section.node.title === "À propos"
  )[0].node;
  const contact = allContentfulContact.edges[0].node;
  const footer = allContentfulFooter.nodes[0];

  const [showPage, setShowPage] = useState(true);
  const [showLoader, setShowLoader] = useState(false);

  useEffect(() => {
    // let about = document.getElementById("about");
    // if (about && props.location.hash === "#a-propos") {
    //   about.scrollIntoView({ behavior: "smooth" }, true);
    // }

    if (showLoader) {
      setTimeout(() => {
        setShowLoader(false);
      }, 1800);
    }
    if (!showPage) {
      setTimeout(() => {
        setShowPage(true);
      }, 1);
    }

    return () => {};
  }, [
    showPage,
    showLoader,
    // props.location.hash
  ]);

  return (
    <div>
      <Layout
        menu={menu}
        navLinks={navLinks}
        showPage={showPage}
        footer={footer}
      >
        {/* <FirstLoader image={loader} show={showLoader}></FirstLoader> */}
        {showPage && !showLoader && (
          <ParallaxProvider>
            <Hero hero={hero} />
            <About about={about} />
            <Team team={team} teamMember={teamMember} />
            <Philosophy philosophy={philosophy} />
            <Services services={services} support={support} />
            <Contact contactData={contact} />
          </ParallaxProvider>
        )}
      </Layout>
    </div>
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
    allContentfulSections(filter: { node_locale: { eq: "fr" } }) {
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
              subtitlte {
                subtitlte
              }
              paragraphs {
                raw
              }
            }
            ... on ContentfulImages {
              id
              images {
                id
                gatsbyImageData
              }
            }
            ... on ContentfulImage {
              id
              image {
                gatsbyImageData
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
                gatsbyImageData
              }
            }
          }
        }
      }
    }
    allContentfulContact(filter: { node_locale: { eq: "fr" } }) {
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
    allContentfulNavLinks(filter: { node_locale: { eq: "fr" } }) {
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
    allContentfulFooter(filter: { node_locale: { eq: "fr" } }) {
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
