/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/reference/config-files/gatsby-config/
 */

/**
 * @type {import('gatsby').GatsbyConfig}
 */

require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
});

const { languages, defaultLanguage } = require("./languages");
const siteUrl = "http://localhost:8000/";

module.exports = {
  siteMetadata: {
    title: `Mizrahi Services Financiers | Mizrahi Financial Services`,
    description: `Mizrahi Services financiers créer de la valeur à travers de véritables connexions, pas de simples transactions. Voilà pourquoi David et Sarah Olivia Mizrahi prennent le temps qu’il faut pour apprendre à vous connaître, un client à la fois. Mizrahi Financial Services`,
    twitterUsername: `@mizrahi`,
    image: `mz.svg`,
    siteUrl: `https://mizrahisf.com/`,
  },
  plugins: [
    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    "gatsby-plugin-netlify",
    `gatsby-plugin-sass`,
    {
      resolve: "gatsby-plugin-robots-txt",
      options: {
        host: "https://www.mizrahisf.com",
        sitemap: "https://www.mizrahisf.com/sitemap.xml",
        policy: [{ userAgent: "*", allow: "/" }],
      },
    },
    {
      resolve: "gatsby-plugin-sitemap",
      options: {
        excludes: ["/**/404", "/**/404.html"],
      },
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        path: `${__dirname}/locales`,
        name: "locale",
      },
    },
    {
      resolve: `gatsby-plugin-styled-components`,
      options: {
        // Add any options here
      },
    },
    {
      resolve: `gatsby-source-contentful`,
      options: {
        spaceId: `9lgpro1hskpf`,
        accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
      },
    },
    {
      resolve: "gatsby-plugin-react-i18next",
      options: {
        languages,
        defaultLanguage: "fr",
        fallbackLanguage: "fr",
        siteUrl,
        i18nextOptions: {
          // debug: true,
          fallbackLng: defaultLanguage,
          supportedLngs: languages,
          defaultNS: "common",
          interpolation: {
            escapeValue: false, // not needed for react as it escapes by default
          },
        },
      },
    },
  ],
};
