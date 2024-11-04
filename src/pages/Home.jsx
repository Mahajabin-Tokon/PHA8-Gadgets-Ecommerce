import React from "react";
import Banner from "../components/Banner";
import Menu from "../components/Menu";
import { Outlet } from "react-router-dom";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <h1 className="text-2xl font-bold text-center py-5">
        Explore Cutting-Edge Gadgets
      </h1>
      <div className="w-11/12 md:flex justify-around gap-2 mx-auto">
        <div className="md:w-1/4"><Menu></Menu></div>
        <div className=""><Outlet></Outlet></div>
      </div>
    </div>
  );
};

export default Home;
