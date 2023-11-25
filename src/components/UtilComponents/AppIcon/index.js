import { Avatar, Box, Typography } from "@mui/material";
import React from "react";
import IconImage from "../../../Assets/icon2.jpg";
import { AppName } from "../../../Utils/constants";
const AppIcon = () => {
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        mt: "1.5rem",
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
