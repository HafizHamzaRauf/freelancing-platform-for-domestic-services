import { Avatar, Box, Typography } from "@mui/material";
import React from "react";
import IconImage from "../../../Assets/icon1.png";
import { AppName } from "../../../Utils/constants";
const AppIcon = () => {
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        mt: "2rem",
      }}
    >
      <Avatar
        alt="Icon Image"
        src={IconImage}
        sx={{
          marginRight: "10px",
        }}
      />

      <Typography variant="h6" sx={{ my: 2 }}>
        {AppName}
      </Typography>
    </Box>
  );
};

export default AppIcon;
