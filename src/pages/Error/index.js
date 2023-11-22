import React from "react";
import Navbar from "../../components/Navbar";
import { Typography } from "@mui/material";

const Error = () => {
  return (
    <>
      <Typography
        variant="h3"
        component={"h3"}
        sx={{ textAlign: "center", m: "2rem" }}
      >
        Page Not Found
      </Typography>
    </>
  );
};

export default Error;
