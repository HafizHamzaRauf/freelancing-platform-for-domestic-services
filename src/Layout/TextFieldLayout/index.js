import { Box } from "@mui/material";
import React from "react";
const TextFieldLayoutStyles = {
  main: {
    display: "flex",
    flexDirection: "column",
    gap: "1rem",
  },
};
const TextFieldLayout = ({ children, customStyles }) => {
  return (
    <Box sx={{ ...TextFieldLayoutStyles.main, ...customStyles }}>
      {children}
    </Box>
  );
};

export default TextFieldLayout;
