import React from "react";


import NavBar from "./NavBar";
import LocationListSelection from "./LocationListSelection";
import Map from "./Map";
import Locations from "./Locations";





function Home() {

  return (
    
    <div class="flex h-screen flex-col">
      
        <div class="bg-blue-500 border-solid border-2 border-black w-full h-12">
          <NavBar />
        </div>

        <div class=" flex flex-1 flex-row">

          <div class="order-1 w-1/4 border-solid border-2 border-black">
            <LocationListSelection />
          </div>

          <div class='w-1/4 border-solid border-2 border-black'>
            <Locations />
          </div>

          <div class="border-l-2 border-solid border-2 border-black w-1/2 ">

            <div class="order-2 flex-1 border-solid border-2 border-black">
              <Map />
            </div>

          </div>


        </div>
      
    </div>
    
  );
}

export default Home;
