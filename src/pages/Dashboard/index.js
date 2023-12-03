import React from "react";
import DashboardNavbarLayout from "../../Layout/DashboardNavbarLayout";
import DashboardMain from "../../components/DashboardComponents/DashboardMain";

const Dashboard = () => {
  return (
    <DashboardNavbarLayout>
      <DashboardMain></DashboardMain>
    </DashboardNavbarLayout>
  );
};

export default Dashboard;
