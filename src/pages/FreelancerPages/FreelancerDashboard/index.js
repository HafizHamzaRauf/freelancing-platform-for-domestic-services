import React from "react";
import DashboardMain from "../../../components/DashboardComponents/DashboardMain";
import FreelancerDashboardNavbarLayout from "../../../Layout/FreelancerDashboardNavbarLayout";

const FreelancerDashboard = () => {
  return (
    <FreelancerDashboardNavbarLayout>
      <DashboardMain></DashboardMain>
    </FreelancerDashboardNavbarLayout>
  );
};

export default FreelancerDashboard;
