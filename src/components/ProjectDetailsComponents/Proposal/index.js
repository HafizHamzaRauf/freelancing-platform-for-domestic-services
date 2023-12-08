import React, { useState } from "react";
import { Box, Rating, Typography, Button } from "@mui/material";
import dummyImage from "../../../Assets/proposal clieng picture.jpg";
import { currency } from "../../../Utils/constants";

const ProposalStyling = {
  ProposalBox: {
    display: "flex",
    flexDirection: "column",
    backgroundColor: "aliceblue",
    p: "2rem 1rem",
    boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.1)",
  },
  proposalDetailBox: {
    display: "flex",
    flexDirection: { xs: "column", sm: "row" },
  },
  RatingBox: {
    display: "flex",
    flexDirection: "column",
    p: { xs: 0, sm: "1rem 2rem" },
    gap: 1,
  },
  Rating: {
    display: "flex",
    alignItems: "center",
  },
  proposalDescription: { p: 1, mt: 2 },
  imageBox: { width: { sm: "12rem" } },
  budget: { justifySelf: "flex-end" },
};

const Proposal = ({
  name,
  rating,
  freelancerTitle,
  budget,
  proposalDescription,
}) => {
  const [showFullDescription, setShowFullDescription] = useState(false);

  // Function to toggle between short and full descriptions
  const toggleDescription = () => {
    setShowFullDescription(!showFullDescription);
  };

  // Shorten the description for display
  const shortDescription =
    proposalDescription.length > 250
      ? `${proposalDescription.slice(0, 250)}...`
      : proposalDescription;

  return (
    <Box sx={ProposalStyling.ProposalBox}>
      <Box sx={ProposalStyling.proposalDetailBox}>
        <Box sx={ProposalStyling.imageBox}>
          <img src={dummyImage} style={{ width: "100%" }} alt={name} />
        </Box>
        <Box sx={ProposalStyling.RatingBox}>
          <Typography variant="h6">{name}</Typography>
          <Box sx={ProposalStyling.Rating}>
            <Rating name="read-only" value={rating} readOnly />
            <span>{rating}</span>
          </Box>

          <Typography variant="h6">{freelancerTitle}</Typography>
        </Box>
        <Typography variant="h6" sx={ProposalStyling.budget}>
          {currency}
          {budget}
        </Typography>
      </Box>
      <Typography variant="p" sx={ProposalStyling.proposalDescription}>
        {showFullDescription ? proposalDescription : shortDescription}
        {proposalDescription.length > 100 && (
          <Button onClick={toggleDescription}>
            {showFullDescription ? "Show Less" : "Learn More"}
          </Button>
        )}
      </Typography>
    </Box>
  );
};

export default Proposal;
