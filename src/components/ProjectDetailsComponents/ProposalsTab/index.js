import { Box, Typography } from "@mui/material";
import React from "react";
import Proposal from "../Proposal";
import { displaySettingsColumn } from "../../../Utils/constants";

const ProposalsTabStyling = {
  ProposalsTabBox: { m: "2rem 1rem", ...displaySettingsColumn, gap: "1rem" },
};

const ProposalsTab = () => {
  return (
    <Box sx={ProposalsTabStyling.ProposalsTabBox}>
      <Typography variant="h6" sx={{ p: 1 }}>
        Awarded Freelancer
      </Typography>
      <Proposal
        budget={900}
        rating={3}
        name={"User Name"}
        freelancerTitle={"Electrician || Plumber || Mechanic"}
        proposalDescription={
          "Revolutionary code optimization project aiming to enhance software performance and reduce resource consumption. Utilizing cutting-edge machine learning algorithms, this project strives to automate error detection and correction in large-scale codebases. An innovative mobile app development initiative that integrates augmented reality to create immersive user experiences. Building a secure and scalable cloud-based platform for real-time collaboration, this project redefines project management for modern software development teams"
        }
      ></Proposal>
      <Typography variant="h6"> Other Proposals</Typography>
      <Proposal
        budget={900}
        rating={3}
        name={"User Name"}
        freelancerTitle={"Electrician || Plumber || Mechanic"}
        proposalDescription={
          "Revolutionary code optimization project aiming to enhance software performance and reduce resource consumption. Utilizing cutting-edge machine learning algorithms, this project strives to automate error detection and correction in large-scale codebases. An innovative mobile app development initiative that integrates augmented reality to create immersive user experiences. Building a secure and scalable cloud-based platform for real-time collaboration, this project redefines project management for modern software development teams"
        }
      ></Proposal>
      <Proposal
        budget={900}
        rating={3}
        name={"User Name"}
        freelancerTitle={"Electrician || Plumber || Mechanic"}
        proposalDescription={
          "Revolutionary code optimization project aiming to enhance software performance and reduce resource consumption. Utilizing cutting-edge machine learning algorithms, this project strives to automate error detection and correction in large-scale codebases. An innovative mobile app development initiative that integrates augmented reality to create immersive user experiences. Building a secure and scalable cloud-based platform for real-time collaboration, this project redefines project management for modern software development teams"
        }
      ></Proposal>
    </Box>
  );
};

export default ProposalsTab;
