import { Box } from "@mui/material";
import React from "react";
import FreelancerDashboardNavbarLayout from "../../../Layout/FreelancerDashboardNavbarLayout";
import ViewBids from "../../../components/FreelancerComponents/ViewBids";

const FreelancerViewBids = () => {
  return (
    <FreelancerDashboardNavbarLayout>
      <ViewBids></ViewBids>
    </FreelancerDashboardNavbarLayout>
  );
};

export default FreelancerViewBids;
