import { useState, useEffect } from "react";
import React  from "react";



const LocationListSelection = (props) => {
    const {updateListData} = props;

    const handleClick = (newListData) => {
        updateListData(newListData)
    }

  return (
    <>
      <div className="text-center">List</div>
      
        <div className="w-2/3 mx-auto">
          <button className="w-full bg-white text-blue-500 font-bold py-2 px-4 rounded-full mb-4 hover:bg-blue-500 hover:text-white" onClick={()=>handleClick(props.todoLocations)}>
            Todo
          </button>
          <button className="w-full bg-white text-blue-500 font-bold py-2 px-4 rounded-full mb-4 hover:bg-blue-500 hover:text-white" onClick={()=>handleClick(props.restaurantLocations)}>
            Restaurants
          </button>
          <button className="w-full bg-white text-blue-500 font-bold py-2 px-4 rounded-full mb-4 hover:bg-blue-500 hover:text-white" onClick={()=>handleClick(props.gasStationLocations)}>
            Gas Stations
          </button>
          <button className="w-full bg-white text-blue-500 font-bold py-2 px-4 rounded-full mb-4 hover:bg-blue-500 hover:text-white">
            Groceries
          </button>
          <button className="w-full bg-white text-blue-500 font-bold py-2 px-4 rounded-full mb-4 hover:bg-blue-500 hover:text-white">
            Hospitals
          </button>
          
        
      </div>
    </>
  );
};

export default LocationListSelection;
