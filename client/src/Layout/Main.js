import Navbar from "../pages/share/Navbar";
import Footer from "../pages/share/Footer";
import Gototop from "../Component/gototop/Gototop";
import Themeswitch from "../Component/Theme/Themeswitch";
import { Outlet } from "react-router-dom";
import React from "react";

export default function Main() {
  return (
    <div className="">
      <Themeswitch />
      <Navbar />
      <Outlet />
      <Gototop />
      <Footer />
    </div>
  );
}
