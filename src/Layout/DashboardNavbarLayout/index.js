import React from "react";
import DashboardNavbar from "../../components/DashboardNavbar";

const DashboardNavbarLayout = ({ children }) => {
  return (
    <>
      <DashboardNavbar></DashboardNavbar>
      {children}
    </>
  );
};

export default DashboardNavbarLayout;
