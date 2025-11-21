import React from "react";
import { Outlet } from "react-router";
import Footer from "../Pages/Shared/Footer/Footer";
import Navber from "../Pages/Shared/Navber/Navber";

const RootLayout = () => {
  return (
    <div>
      <div className="flex flex-col min-h-screen bg-gray-100 p-6">
      <Navber></Navber>
      <div className="flex-1">
        <Outlet></Outlet>
      </div>
      <Footer></Footer>
    </div>
    </div>
  );
};

export default RootLayout;
