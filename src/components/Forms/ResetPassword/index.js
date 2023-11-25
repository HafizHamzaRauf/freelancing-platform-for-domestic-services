import React from "react";
import BoxLayout from "../../../Layout/BoxLayout";
import CenterLayout from "../../../Layout/CenterLayout";
import { Button, TextField, Typography } from "@mui/material";
import AppIcon from "../../UtilComponents/AppIcon";
import theme from "../../../Utils/theme";
import TextFieldLayout from "../../../Layout/TextFieldLayout";

const ResetPassword = () => {
  return (
    <CenterLayout>
      <BoxLayout>
        <AppIcon></AppIcon>
        <Typography variant="h6" sx={{ m: "1rem 0" }}>
          Reset Password
        </Typography>
        <TextFieldLayout>
          <TextField
            id="outlined-email-input"
            label="Enter Your Email"
            type="email"
          />
          <Button
            sx={{
              backgroundColor: theme.palette.secondary.main,
              alignSelf: "flex-start",
            }}
            variant="contained"
          >
            Send
          </Button>
        </TextFieldLayout>
      </BoxLayout>
    </CenterLayout>
  );
};

export default ResetPassword;
