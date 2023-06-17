import React from "react";
import Header from "../components/Header/Header";
import { Outlet } from "react-router-dom";
import "../App.css";
import Footer from "../components/Footer/Footer";

const Main = () => {
  return (
    <div className="body-wrapper">
      <Header></Header>
      <Outlet></Outlet>
      <Footer></Footer>
    </div>
  );
};

export default Main;
