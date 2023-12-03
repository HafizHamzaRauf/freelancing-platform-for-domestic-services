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
import Signup from "../components/Forms/SignUp";
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
