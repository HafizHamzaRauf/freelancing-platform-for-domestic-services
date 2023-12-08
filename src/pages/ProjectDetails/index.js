import { Box } from "@mui/material";
import React from "react";
import DashboardNavbarLayout from "../../Layout/DashboardNavbarLayout";
import Project from "../../components/ProjectDetailsComponents/Project";

const ProjectDetails = () => {
  return (
    <DashboardNavbarLayout>
      <Project></Project>
    </DashboardNavbarLayout>
  );
};

export default ProjectDetails;
