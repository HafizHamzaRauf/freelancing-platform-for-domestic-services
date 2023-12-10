import { Box, Typography } from "@mui/material";
import React from "react";
import { AppName, email, phoneNo } from "../../../Utils/constants";
import { Link } from "react-router-dom";
import theme from "../../../Utils/theme";

const footerStyles = {
  linkBox: {
    display: "flex",
    flexDirection: "column",
    gap: "10px",
  },
  footerlinks: {
    color: "white",
    textDecoration: "none",
  },
};
const Footer = () => {
  return (
    <Box
      sx={{
        backgroundColor: theme.palette.primary.main,
        color: "white",

        p: { xs: "3rem 1rem", md: "3rem 2rem" },
        display: "flex",
        flexDirection: { xs: "column", md: "row" },
        justifyContent: "space-around",
        alignItems: "center",
        gap: { xs: "2rem", md: "0rem" },
      }}
    >
      <Box>
        <Typography variant="h4" sx={{ fontWeight: "bold" }}>
          {AppName}
        </Typography>
        <Typography variant="body1">
          © {new Date().getFullYear()}All rights reserved.
        </Typography>
      </Box>
      <Box sx={footerStyles.linkBox}>
        <Typography variant="body1">{phoneNo}</Typography>
        <Typography variant="body1">{email}</Typography>
      </Box>
      <Box sx={footerStyles.linkBox}>
        <Link style={footerStyles.footerlinks} to={"/"}>
          Homepage
        </Link>
        <Link style={footerStyles.footerlinks} to={"/about"}>
          About
        </Link>
      </Box>
      <Box sx={footerStyles.linkBox}>
        <a style={footerStyles.footerlinks} href="www.facebook.com">
          facebook
        </a>
        <a style={footerStyles.footerlinks} href="www.twitter.com">
          twitter
        </a>
        <a style={footerStyles.footerlinks} href="www.instagram.com">
          instagram
        </a>
      </Box>
    </Box>
  );
};

export default Footer;
