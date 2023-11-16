// Logs when the client route changes
exports.onRouteUpdate = ({ location, prevLocation }) => {
  const prev = JSON.stringify(prevLocation);
  localStorage.setItem("previousPath", prev);
};
