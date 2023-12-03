import { Box, Typography, Grid, Card, CardContent } from "@mui/material";
import React from "react";
import CountUp from "react-countup";
import {
  dashboardDescription,
  dashboardMainHeading,
} from "../../../Utils/constants";
import DashboardCard from "../DashboardCard";

const DashboardMain = () => {
  const freelancerData = {
    balance: 5000, // replace with actual balance
    actualProjects: 8, // replace with actual number
    totalReviews: 123, // replace with actual number
    completedProjects: 45, // replace with actual number
  };

  return (
    <Box sx={{ p: "3rem 4rem" }}>
      <Typography sx={{ textAlign: "center" }} variant="h3">
        {dashboardMainHeading}
      </Typography>
      <Typography variant="p" sx={{ fontSize: "1.5rem" }}>
        {dashboardDescription}
      </Typography>
      <Grid container spacing={4} mt={4}>
        {/* Freelancer Cards */}
        <DashboardCard
          Title={"Balance"}
          Value={freelancerData?.balance}
        ></DashboardCard>

        <DashboardCard
          Title={"Total Reviews"}
          Value={freelancerData?.totalReviews}
        ></DashboardCard>
        <DashboardCard
          Title={"Active Projects"}
          Value={freelancerData?.actualProjects}
        ></DashboardCard>

        <DashboardCard
          Title={"Projects Completed"}
          Value={freelancerData?.completedProjects}
        ></DashboardCard>
      </Grid>
    </Box>
  );
};

export default DashboardMain;
