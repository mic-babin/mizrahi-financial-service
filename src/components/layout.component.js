import React from "react";
import "../assets/styles/normalize.css";
import "../assets/styles/main.scss";
import Header from "./navigation/header/header.component";
import Footer from "./navigation/footer/footer.component";
import SEO from "./seo";
import Cursor from "./common/cursor/cursor.component";

const Layout = ({ menu, showPage, children, navLinks, footer }) => {
  const isBrowser = typeof window !== "undefined";

  return (
    <>
      {showPage && <Header menu={menu} navLinks={navLinks} />}
      {isBrowser && <Cursor />}
      {children}
      {showPage && <Footer navLinks={navLinks} footer={footer} />}
    </>
  );
};
export const Head = () => <SEO />;

export default Layout;
