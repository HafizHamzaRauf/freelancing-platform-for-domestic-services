import { Box, Typography } from "@mui/material";
import React from "react";
import theme from "../../../Utils/theme";
import { bids } from "../../../Utils/constants";

const ViewBidsStyles = {
  bidBoxHeading: {
    color: "white",
    backgroundColor: theme.palette.secondary.main,
  },
  bidBox: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    p: "1rem",
    backgroundColor: "aliceblue",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
    "&:hover": {
      cursor: "pointer",
    },
  },
};

const ViewBids = () => {
  const truncateText = (text, maxLength) => {
    if (text.length > maxLength) {
      return text.substring(0, maxLength - 2) + "..";
    }
    return text;
  };

  return (
    <Box
      sx={{
        margin: "4rem auto",
        width: "90%",
        display: "flex",
        gap: "1rem",
        flexDirection: "column",
      }}
    >
      <Box
        key={""}
        sx={{
          ...ViewBidsStyles.bidBox,
          ...ViewBidsStyles.bidBoxHeading,
        }}
      >
        <Typography variant="p">Project Title</Typography>
        <Typography variant="p">Project Date</Typography>
        <Typography variant="p">Awarded Freelancer</Typography>
      </Box>
      {bids.map((bid) => (
        <Box key={bid.id} sx={ViewBidsStyles.bidBox}>
          <Typography variant="p">
            {truncateText(bid.projectTitle, 14)}
          </Typography>
          <Typography variant="p">{bid.date}</Typography>
          <Typography variant="p">
            {truncateText(bid.awardedFreelancer, 14)}
          </Typography>
        </Box>
      ))}
    </Box>
  );
};

export default ViewBids;
