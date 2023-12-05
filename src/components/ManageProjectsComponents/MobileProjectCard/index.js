import { Box, Button, Typography } from "@mui/material";
import React from "react";

const MobileProjectCard = ({ key, Title, Description }) => {
  // Truncate the title to 12 characters
  const truncatedTitle = Title.length > 12 ? `${Title.slice(0, 12)}...` : Title;

  const truncatedDescription =
    Description.length > 12 ? `${Description.slice(0, 12)}...` : Description;

  return (
    <Box
      sx={{
        display: "flex",
        backgroundColor: "aliceblue",
        p: "1rem",
        alignItems: "center",
        borderRadius: "5px",
        justifyContent: "space-between",
      }}
      key={key}
    >
      <Box>
        <Typography variant="h6">{truncatedTitle}</Typography>
        <Typography variant="p">{truncatedDescription}</Typography>
      </Box>
      <Button variant="contained" color="secondary">
        View
      </Button>
    </Box>
  );
};

export default MobileProjectCard;
