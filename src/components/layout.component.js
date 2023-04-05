import React from "react";
import { useState } from "react";
import "../assets/styles/normalize.css";
import "../assets/styles/main.scss";
import "../assets/styles/accordion.css";
import { useEffect } from "react";
import Header from "./navigation/header/header.component";
import Footer from "./navigation/footer/footer.component";
import SEO from "./seo";
import AnimatedCursor from "react-animated-cursor";

const Layout = ({ menu, showPage, children, navLinks, footer }) => {
  const [showMenu, setShowMenu] = useState(false);
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    if (showModal) {
      setShowModal(showMenu);
    } else {
      setShowModal(showMenu);
    }
  }, [showMenu, showModal]);

  return (
    <div>
      {showPage && (
        <>
          <Header
            menu={menu}
            showMenu={showMenu}
            setShowMenu={setShowMenu}
            navLinks={navLinks}
          />
        </>
      )}
      <AnimatedCursor
        innerSize={12}
        outerSize={15}
        outerScale={3}
        color="37, 91, 91"
        clickables={[
          "a",
          'input[type="text"]',
          'input[type="email"]',
          'input[type="number"]',
          'input[type="submit"]',
          'input[type="image"]',
          "label[for]",
          "select",
          "textarea",
          "button",
          ".link",
        ]}
      />
      {children}
      {showPage && <Footer navLinks={navLinks} footer={footer} />}
    </div>
  );
};
export const Head = () => <SEO />;

export default Layout;
