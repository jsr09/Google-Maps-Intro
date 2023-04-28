import React from "react";
import NavBar from "./NavBar";
import SideBar from "./SideBar";
import Map from "./Map";

function Home() {
  return (
    <div className="flex h-screen">
      <div className="w-full">
        <div className="bg-blue-500 text-white border-b-2 w-full h-12">
          <NavBar />
        </div>
        <div className=" flex h-full">
          <div className="bg-gradient-to-b from-blue-100 to-blue-500 border-r-2 w-2/5 text-blue-400">
            <SideBar />
          </div>
          <div className="border-l-2 border-r-2 w-3/5 bg-gradient-to-b from-blue-100 to-blue-500 ">
          <div className="my-auto text-blue-400">
            <Map />
          </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
