import React from "react";
import { useState } from "react";
import "../assets/styles/normalize.css";
import "../assets/styles/main.scss";
import "../assets/styles/accordion.css";
import { useEffect } from "react";
import Header from "./navigation/header/header.component";
import Footer from "./navigation/footer/footer.component";

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
      {children}
      {showPage && <Footer navLinks={navLinks} footer={footer} />}
    </div>
  );
};

export default Layout;
