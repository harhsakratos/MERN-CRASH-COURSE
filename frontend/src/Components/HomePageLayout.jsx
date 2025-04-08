import React from "react";
import { Outlet } from "react-router";
import Navbar from "./AppHeader";

const HomePageLayout = () => {
  return (
    <>
      <Navbar />
      <Outlet />
    </>
  );
};

export default HomePageLayout;
