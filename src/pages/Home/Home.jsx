import React from "react";
import SideBar from "./SideBar";
import MainContent from "./MainContent";

const Home = () => {
  return (
    <div>
      <div className="grid md:grid-cols-4 gap-8">
        <div className="hidden md:block ">
          <SideBar></SideBar>
        </div>
        <div className="col-span-3 ">
          <MainContent></MainContent>
        </div>
      </div>
    </div>
  );
};

export default Home;
