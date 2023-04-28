import React from "react";
import NavBar from "./components/NavBar";
import SideBar from "./components/SideBar";
import Map from "./components/Map";

function Home() {
  return (
    <div className="flex h-screen">
      <div className="w-full">
        <div className=" border-2 w-full h-12">
          <NavBar />
        </div>
        <div className="flex h-full">
          <div className="border-2 w-2/5">
            <SideBar />
          </div>
          <div className="border-2 w-3/5 my-auto">
            <Map />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
