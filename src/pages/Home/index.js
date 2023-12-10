import React from "react";
import Navbar from "../../components/Navbar";
import MainBody from "../../components/MainBody";
import NavbarLayout from "../../Layout/NavbarLayout";
import Carousal from "../../components/HomeComponents/Carousal";
import Categories from "../../components/HomeComponents/Categories";
import { Divider } from "@mui/material";
import Footer from "../../components/HomeComponents/Footer";
import theme from "../../Utils/theme";

const Home = () => {
  return (
    <NavbarLayout>
      <MainBody></MainBody>
      <Carousal></Carousal>
      <Categories></Categories>

      <Footer></Footer>
    </NavbarLayout>
  );
};

export default Home;
