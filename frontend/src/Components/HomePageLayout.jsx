import React from "react";
import { Outlet } from "react-router";
import AppHeader from "./AppHeader";

const HomePageLayout = () => {
  return (
    <>
      <AppHeader />
      <Outlet />
    </>
  );
};

export default HomePageLayout;
