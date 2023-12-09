import { Box, Button, Typography } from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";
const MobileProjectCardStyling = {
  MobileProjectCardBox: {
    display: "flex",
    backgroundColor: "aliceblue",
    p: "1rem",
    alignItems: "center",
    borderRadius: "5px",
    justifyContent: "space-between",
  },
};
const MobileProjectCard = ({ projectId, Title, Description }) => {
  // Truncate the title to 12 characters
  const navigate = useNavigate();
  const truncatedTitle = Title.length > 12 ? `${Title.slice(0, 12)}...` : Title;

  const truncatedDescription =
    Description.length > 12 ? `${Description.slice(0, 12)}...` : Description;

  const handleViewClick = () => {
    navigate(`/projects/${projectId}`);
  };

  return (
    <Box sx={MobileProjectCardStyling.MobileProjectCardBox} key={projectId}>
      <Box>
        <Typography variant="h6">{truncatedTitle}</Typography>
        <Typography variant="p">{truncatedDescription}</Typography>
      </Box>
      <Button
        onClick={handleViewClick}
        id={projectId}
        variant="contained"
        color="secondary"
      >
        View
      </Button>
    </Box>
  );
};

export default MobileProjectCard;
