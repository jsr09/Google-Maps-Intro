import React from "react";
import NavBar from "./NavBar";
import {Checkbox} from "@material-tailwind/react";

const FutureFeatures = () => {
  return (
    <div>
      <div className=" border-2 w-full h-12">
        <NavBar />
      </div>
      <div>
        <h1>Future Features Commming Soon</h1>
        <ul>
          <li Checkbox lablel='Sidebar with list of buttons to control location'></li>
          <li>Map on the page</li>
          <li>List of locations below map</li>
          <li>Map markers</li>
          <li>Directions to apprear on map when location is clicked</li>

          <li>group of markers show up on map for list choosen</li>
          <li>input address get location marker</li>
          <li>Calendar below the Map</li>
          <li>
            Click on Calendar appointment to get directions to appointment
          </li>
          <li>Who Knows</li>
        </ul>
      </div>
    </div>
  );
};

export default FutureFeatures;
