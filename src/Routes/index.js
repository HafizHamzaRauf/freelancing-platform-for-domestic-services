// AppRouter.js

import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import Error from "../pages/Error";
import NavbarLayout from "../Layout/NavbarLayout";
import SigninPage from "../pages/Signin";
import SignupPage from "../pages/Signup";
import ForgetPassword from "../pages/ForgetPassword";
const AppRouter = () => {
  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <NavbarLayout>
              <Home />
            </NavbarLayout>
          }
        />
        <Route
          path="/signin"
          element={
            <NavbarLayout>
              <SigninPage />
            </NavbarLayout>
          }
        />
        <Route
          path="/signup"
          element={
            <NavbarLayout>
              <SignupPage />
            </NavbarLayout>
          }
        />
        <Route
          path="/forgetpassword"
          element={
            <NavbarLayout>
              <ForgetPassword />
            </NavbarLayout>
          }
        />

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
