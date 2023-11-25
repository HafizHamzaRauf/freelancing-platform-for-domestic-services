import React from "react";
const CenterLayoutStyles = {
  main: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
};
const CenterLayout = ({ children, customStyle }) => {
  return (
    <div style={{ ...CenterLayoutStyles.main, ...customStyle }}>{children}</div>
  );
};

export default CenterLayout;
