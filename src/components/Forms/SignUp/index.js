import {
  Box,
  Button,
  Checkbox,
  FormControlLabel,
  FormGroup,
  TextField,
  Typography,
} from "@mui/material";
import React from "react";
import AppIcon from "../../UtilComponents/AppIcon";
import { Link, useNavigate } from "react-router-dom";
import theme from "../../../Utils/theme";

const SignupStyles = {
  CenterBox: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  SiginBox: {
    backgroundColor: theme.palette.tertiary.main,
    width: "30rem",
    display: "flex",
    flexDirection: "column",
    padding: "2rem 3rem",
    margin: "3rem 1rem",

    borderRadius: "10px",
    borderTop: `6px solid ${theme.palette.primary.main}`,
    boxShadow: "0 4px 8px rgba(0,0,0,.1)",
    gap: "2rem",
  },
  FieldBox: {
    display: "flex",
    justifyContent: "space-between",
    gap: "1rem",
    flexDirection: {
      xs: "column",
      sm: "row",
    },
  },
  SignupButton: {
    backgroundColor: theme.palette.secondary.main,
    color: "white",
    "&:hover": {
      backgroundColor: theme.palette.primary.main,
    },
  },
};

const Signup = () => {
  const navigate = useNavigate();
  const onFormSubmit = (e) => {
    e.preventDefault();
    navigate("/dashboard");
    console.log("inside the sign in form ");
  };
  return (
    <Box sx={SignupStyles.CenterBox}>
      <form style={SignupStyles.SiginBox} onSubmit={onFormSubmit}>
        <AppIcon></AppIcon>
        <Typography variant="h5" component={"h5"} sx={{ fontWeight: "bold" }}>
          Sign Up
        </Typography>
        <Box sx={SignupStyles.FieldBox}>
          <TextField
            id="standard-name-input"
            label="Name"
            type="text"
            variant="standard"
          />
          <TextField
            id="standard-email-input"
            label="Email"
            type="email"
            variant="standard"
          />
        </Box>
        <Box sx={SignupStyles.FieldBox}>
          <TextField
            id="standard-address-input"
            label="Address"
            type="text"
            variant="standard"
          />
          <TextField
            id="standard-phone-input"
            label="Phone"
            type="text"
            variant="standard"
          />
        </Box>
        <Box sx={SignupStyles.FieldBox}>
          <TextField
            id="standard-password-input"
            label="Password"
            type="password"
            variant="standard"
          />
          <TextField
            id="standard-confirmpassword-input"
            label="Confirm Password"
            type="password"
            variant="standard"
          />
        </Box>
        <FormGroup>
          <FormControlLabel
            control={<Checkbox defaultChecked />}
            label="Register As Freelancer"
          />
        </FormGroup>
        <Button type="submit" sx={SignupStyles.SignupButton}>
          Submit
        </Button>
        <Typography variant="p">
          Already a Member? <Link to={"/signin"}>Signin</Link>
        </Typography>
      </form>
    </Box>
  );
};

export default Signup;
