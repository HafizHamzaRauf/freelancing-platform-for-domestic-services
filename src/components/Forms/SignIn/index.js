import { Box, Button, TextField, Typography } from "@mui/material";
import React from "react";
import AppIcon from "../../UtilComponents/AppIcon";
import { Link } from "react-router-dom";
import theme from "../../../Utils/theme";

const SigninStyles = {
  CenterBox: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  SiginBox: {
    backgroundColor: theme.palette.tertiary.main,
    width: "25rem",
    display: "flex",
    flexDirection: "column",
    padding: "2rem 3rem",
    margin: "3rem 1rem",

    borderRadius: "10px",
    borderTop: `6px solid ${theme.palette.primary.main}`,
    boxShadow: "0 4px 8px rgba(0,0,0,.1)",
    gap: "1.2rem",
  },
  SigninButton: {
    backgroundColor: theme.palette.secondary.main,
    color: "white",
    "&:hover": {
      backgroundColor: theme.palette.primary.main,
    },
  },
};

const Signin = () => {
  const onFormSubmit = (e) => {
    e.preventDefault();
    console.log("inside the sign in form ");
  };
  return (
    <Box sx={SigninStyles.CenterBox}>
      <form style={SigninStyles.SiginBox} onSubmit={onFormSubmit}>
        <AppIcon></AppIcon>
        <Typography variant="h5" component={"h5"} sx={{ fontWeight: "bold" }}>
          Sign In
        </Typography>
        <TextField id="outlined-email-input" label="Email" type="email" />
        <TextField
          id="outlined-password-input"
          label="Password"
          type="password"
          autoComplete="current-password"
        />

        <Link to={"/forgetpassword"}> Forget Password </Link>

        <Button sx={SigninStyles.SigninButton} type="submit">
          Submit
        </Button>
        <Typography variant="p">
          Not a Member? <Link to={"/signup"}>Register</Link>
        </Typography>
      </form>
    </Box>
  );
};

export default Signin;
