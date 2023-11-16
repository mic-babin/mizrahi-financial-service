// Logs when the client route changes
exports.onRouteUpdate = ({ location, prevLocation }) => {
  const isBrowser = typeof window !== "undefined";
  const prev = JSON.stringify(prevLocation);
  if (isBrowser) {
    localStorage.setItem("previousPath", prev);
  }
};
