// AppRouter.js

import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import Error from "../pages/Error";
import NavbarLayout from "../Layout/NavbarLayout";
import SigninPage from "../pages/Signin";
import SignupPage from "../pages/Signup";
import ForgetPassword from "../pages/ForgetPassword";
import Dashboard from "../pages/Dashboard";
import PostProject from "../pages/PostProject";
import ManageProjects from "../pages/ManageProjects";
import ProjectDetails from "../pages/ProjectDetails";
import FreelancerDashboard from "../pages/FreelancerPages/FreelancerDashboard";
import FreelancerManageProjects from "../pages/FreelancerPages/FreelancerManageProjects";
import FreelancerProjectDetails from "../pages/FreelancerPages/FreelancerProjectDetails";
import ViewBids from "../components/FreelancerComponents/ViewBids";
import FreelancerViewBids from "../pages/FreelancerPages/FreelancerViewBids";
const AppRouter = () => {
  return (
    <Router>
      <Routes>
        {/* *****************************     HOME PAGE ROUTES      ***************************** */}

        <Route path="/" element={<Home />} />
        <Route path="/signin" element={<SigninPage />} />
        <Route path="/signup" element={<SignupPage></SignupPage>} />
        <Route path="/forgetpassword" element={<ForgetPassword />} />

        {/* *****************************     DASHBOARD PAGE ROUTES      ***************************** */}

        <Route path="/dashboard" element={<Dashboard></Dashboard>} />

        {/* *****************************     CLIENT  ROUTES      ***************************** */}

        <Route path="/postproject" element={<PostProject></PostProject>} />
        <Route
          path="/manageprojects"
          element={<ManageProjects></ManageProjects>}
        />

        <Route
          path="/projects/:projectId"
          element={<ProjectDetails></ProjectDetails>}
        />

        {/* *****************************     Freelancer  ROUTES      ***************************** */}
        <Route
          path="/freelancer/dashboard"
          element={<FreelancerDashboard></FreelancerDashboard>}
        />
        <Route
          path="/freelancer/manageProjects"
          element={<FreelancerManageProjects></FreelancerManageProjects>}
        />
        <Route
          path="/freelancer/projects/:projectId"
          element={<FreelancerProjectDetails></FreelancerProjectDetails>}
        />

        <Route
          path="/freelancer/viewbids"
          element={<FreelancerViewBids></FreelancerViewBids>}
        />
        {/* *****************************     ERROR  ROUTES      ***************************** */}

        <Route
          path="*"
          element={
            <NavbarLayout>
              <Error />
            </NavbarLayout>
          }
        />
      </Routes>
    </Router>
  );
};

export default AppRouter;
