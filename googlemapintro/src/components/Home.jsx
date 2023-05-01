import React from "react";


import NavBar from "./NavBar";
import LocationListSelection from "./LocationListSelection";
import Map from "./Map";
import Locations from "./Locations";





function Home() {

  return (
    
    <div className="flex h-screen flex-col">
      
        <div className="bg-blue-500 border-solid border-2 border-black w-full h-12">
          <NavBar />
        </div>

        <div className=" flex flex-1 flex-row">

          <div className="order-1 w-1/4 border-solid border-2 border-black">
            <LocationListSelection />
          </div>

          <div className='w-1/4 border-solid border-2 border-black'>
            <Locations />
          </div>

          <div className="border-l-2 border-solid border-2 border-black w-1/2 ">

            <div className="order-2 flex-1 border-solid border-2 border-black">
              <Map />
            </div>

          </div>


        </div>
      
    </div>
    
  );
}

export default Home;
