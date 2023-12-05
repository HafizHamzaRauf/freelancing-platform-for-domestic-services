import React from "react";
import DashboardNavbarLayout from "../../Layout/DashboardNavbarLayout";
import ManageProjectsMain from "../../components/ManageProjectsComponents/ManageProjectsMain";

const ManageProjects = () => {
  return (
    <DashboardNavbarLayout>
      <ManageProjectsMain></ManageProjectsMain>
    </DashboardNavbarLayout>
  );
};

export default ManageProjects;
