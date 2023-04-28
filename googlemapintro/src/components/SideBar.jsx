import { useState, useEffect } from "react";
import React  from "react";



const Sidebar = () => {
    const [locationList, setLocationList] = useState([]);

    const handleClick = (Locations) => {
        setLocationList(Locations)
    }

  return (
    <>
      <div className="text-center">Side Bar</div>
      <div className="bg-gradient-to-b from-blue-100 to-blue-500 border-r-2 w-2/5 text-white flex flex-col justify-center">
        <div className="w-2/3 mx-auto">
          <button className="w-full bg-white text-blue-500 font-bold py-2 px-4 rounded-full mb-4 hover:bg-blue-500 hover:text-white" onClick={()=>handleClick(todoLocations)}>
            Todo
          </button>
          <button className="w-full bg-white text-blue-500 font-bold py-2 px-4 rounded-full mb-4 hover:bg-blue-500 hover:text-white" onClick={()=>handleClick(restaurantLocations)}>
            Restaurants
          </button>
          <button className="w-full bg-white text-blue-500 font-bold py-2 px-4 rounded-full mb-4 hover:bg-blue-500 hover:text-white" onClick={()=>handleClick(gasStationLocations)}>
            Gas Stations
          </button>
          <button className="w-full bg-white text-blue-500 font-bold py-2 px-4 rounded-full mb-4 hover:bg-blue-500 hover:text-white">
            Groceries
          </button>
          <button className="w-full bg-white text-blue-500 font-bold py-2 px-4 rounded-full mb-4 hover:bg-blue-500 hover:text-white">
            Hospitals
          </button>
          
        </div>
      </div>
    </>
  );
};

export default Sidebar;
