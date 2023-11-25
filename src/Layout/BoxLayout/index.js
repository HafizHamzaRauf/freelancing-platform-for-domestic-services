import { Box } from "@mui/material";
import React from "react";
import theme from "../../Utils/theme";
const BoxLayoutStyles = {
  main: {
    backgroundColor: theme.palette.tertiary.main,
    width: "20rem",
    borderRadius: "10px",
    borderTop: `6px solid ${theme.palette.primary.main}`,
    boxShadow: "0 4px 8px rgba(0,0,0,.1)",
    padding: "1rem 1.5rem",
    margin: "3rem 1rem",
  },
};
const BoxLayout = ({ children, customStyles }) => {
  return (
    <Box sx={{ ...BoxLayoutStyles.main, ...customStyles }}>{children}</Box>
  );
};

export default BoxLayout;
