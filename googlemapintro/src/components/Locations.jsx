import React from "react";
import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import {setSelectedLocation} from "../store/index";
import LocationInfo from "./LocationInfo";

const Locations = () => {
  const dispatch = useDispatch();
  
  const { locationList } = useSelector((state) => state.locationList);
  console.log("Line 9 locationList>>>", locationList);

  const handleClick = (location) => {
    console.log("Line 13 location>>>", location);
    dispatch(setSelectedLocation(location));
    console.log("Line 15 location>>>", location);
  };
  return (
    <div>
      <h1 class="text-center">Location List</h1>
      <ul class="flex flex-col w-3/4 mx-auto">
        {locationList.length > 0 ? (
          locationList.map((location) => (
            <button
              className="text-center w-full bg-white text-blue-500 font-bold py-2 px-4 rounded-full mb-4 hover:bg-blue-500 hover:text-white"
              onClick={() => handleClick(location)}
            >
              {location.name}
            </button>
          ))
        ) : (
          <h1>Loading...</h1>
        )}
      </ul>
      <LocationInfo />
    </div>
  );
};

export default Locations;
