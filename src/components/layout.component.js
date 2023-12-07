import React from "react";
import "../assets/styles/normalize.css";
import "../assets/styles/main.scss";
import Header from "./navigation/header/header.component";
import Footer from "./navigation/footer/footer.component";
import SEO from "./seo";
import { useI18next } from "gatsby-plugin-react-i18next";
import { Helmet } from "react-helmet";

const Layout = ({ menu, showPage, children, navLinks, footer }) => {
  const {
    i18n: { language },
  } = useI18next();
  return (
    <>
      <Helmet htmlAttributes={{ lang: language }} />
      {showPage && <Header menu={menu} navLinks={navLinks} />}
      {children}
      {showPage && <Footer navLinks={navLinks} footer={footer} />}
    </>
  );
};
export const Head = () => <SEO />;

export default Layout;
