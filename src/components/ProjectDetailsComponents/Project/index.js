import { Box, Tab, Tabs, Typography } from "@mui/material";
import React, { useState } from "react";
import { useParams } from "react-router-dom";
import DetailsTab from "../DetailsTab";
import ProposalsTab from "../ProposalsTab";
import ChatTab from "../ChatTab";
const ProjectStyling = {
  projectBox: { m: { xs: "2rem 1rem", md: "4rem" } },
};
const Project = () => {
  const { projectId } = useParams();
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={ProjectStyling.projectBox}>
      <Typography variant="h4">It is Project Description</Typography>
      <Box sx={{ width: "100%" }}>
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="basic tabs example"
        >
          <Tab label="Details" />
          <Tab label="Proposals" />
          <Tab label="Chat" />
        </Tabs>

        {value === 0 && (
          <DetailsTab
            description={
              "Revolutionary code optimization project aiming to enhance software performance and reduce resource consumption. Utilizing cutting-edge machine learning algorithms, this project strives to automate error detection and correction in large-scale codebases. An innovative mobile app development initiative that integrates augmented reality to create immersive user experiences. Building a secure and scalable cloud-based platform for real-time collaboration, this project redefines project management for modern software development teams"
            }
            budget={1200}
            noOfProposals={3}
          ></DetailsTab>
        )}

        {value === 1 && <ProposalsTab></ProposalsTab>}
        {value === 2 && <ChatTab></ChatTab>}
      </Box>
    </Box>
  );
};

export default Project;
