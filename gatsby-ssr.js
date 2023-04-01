import * as React from "react";

export const onRenderBody = ({ setHtmlAttributes, setHeadComponents }) => {
  setHtmlAttributes({ lang: "en" });
  setHeadComponents([
    <link
      rel="preload"
      href="/fonts/SF-Light.ttf"
      as="font"
      type="font/otf"
      crossOrigin="anonymous"
      key="SF-Display-Light"
    />,
    <link
      rel="preload"
      href="/fonts/SF-Regular.ttf"
      as="font"
      type="font/ttf"
      crossOrigin="anonymous"
      key="SF-Display-Regular"
    />,
    <link
      rel="preload"
      href="/fonts/TimeNow-Light.otf"
      as="font"
      type="font/otf"
      crossOrigin="anonymous"
      key="TimesNow"
    />,
  ]);
};
