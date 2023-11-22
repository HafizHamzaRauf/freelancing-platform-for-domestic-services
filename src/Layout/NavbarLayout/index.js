import React from "react";
import Navbar from "../../components/Navbar";

const NavbarLayout = ({ children }) => {
  return (
    <>
      <Navbar></Navbar>
      {children}
    </>
  );
};

export default NavbarLayout;
