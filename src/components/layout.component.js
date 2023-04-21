import React from "react";
import "../assets/styles/normalize.css";
import "../assets/styles/main.scss";
import Header from "./navigation/header/header.component";
import Footer from "./navigation/footer/footer.component";
import SEO from "./seo";

const Layout = ({ menu, showPage, children, navLinks, footer }) => {
  return (
    <>
      {showPage && <Header menu={menu} navLinks={navLinks} />}
      {children}
      {showPage && <Footer navLinks={navLinks} footer={footer} />}
    </>
  );
};
export const Head = () => <SEO />;

export default Layout;
