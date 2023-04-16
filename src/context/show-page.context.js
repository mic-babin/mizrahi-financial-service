import React, { createContext, useState, useEffect } from "react";

export const ShowPageContext = createContext({
  showPage: null,
  setShowPage: () => null,
});

export const ShowPageProvider = ({ children }) => {
  const [showPage, setShowPage] = useState(null);
  const value = { showPage };

  useEffect(() => {
    if (!showPage) {
      setTimeout(() => {
        setShowPage(true);
      }, 4400);
    }

    return () => {};
  }, [showPage]);

  return (
    <ShowPageContext.Provider value={value}>
      {children}
    </ShowPageContext.Provider>
  );
};
