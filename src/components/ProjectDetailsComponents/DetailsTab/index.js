import { Alert, Box, Chip, Typography } from "@mui/material";
import React from "react";
import { currency, scamWarningMessage } from "../../../Utils/constants";

const DetailsTabStyling = {
  DetailsTabBox: {
    mt: 2,
    display: "flex",
    flexDirection: "column",
    gap: 2,
    p: { xs: 1, md: 2 },
  },
  budgetBox: {
    display: "flex",
    justifyContent: "space-between",
  },
};
const DetailsTab = ({ description, budget, noOfProposals }) => {
  return (
    <Box sx={DetailsTabStyling.DetailsTabBox}>
      <Box sx={DetailsTabStyling.budgetBox}>
        <Typography variant="h6"> Project Details</Typography>
        <Typography variant="h6">
          {currency}
          {budget}
        </Typography>
      </Box>
      <Typography variant="p"> {description}</Typography>
      <Chip label={"Proposals: " + noOfProposals} sx={{ alignSelf: "start" }} />
      <Alert sx={{ mt: 3 }} severity="warning">
        {scamWarningMessage}
      </Alert>
    </Box>
  );
};

export default DetailsTab;
