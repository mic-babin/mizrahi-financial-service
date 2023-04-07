import React, { createContext, useState } from "react";

export const SlideContext = createContext({
  active: null,
  setActive: () => null,
});

export const SlideProvider = ({ children }) => {
  const [active, setActive] = useState(null);
  const value = { active, setActive };

  return (
    <SlideContext.Provider value={value}>{children}</SlideContext.Provider>
  );
};
