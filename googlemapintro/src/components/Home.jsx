import React from "react";
import {createContext, useContect, useState, useEffect} from 'react'

import NavBar from "./NavBar";
import LocationListSelection from "./LocationListSelection";
import Map from "./Map";
import Locations from "./Locations";

const ListCentext = createContext();

const todoLocations = [
  {
    id: 2,
    name: "Todo Location 1",
    position: { lat: 37.7749, lng: -122.4194 },
    zoom: 14,
  },
  {
    id: 3,
    name: "Todo Location 2",
    position: { lat: 37.7749, lng: -122.4094 },
    zoom: 14,
  },
  {
    id: 4,
    name: "Todo Location 3",
    position: { lat: 37.7649, lng: -122.4194 },
    zoom: 14,
  },
];

const restaurantLocations = [
  {
    id: 5,
    name: "Restaurant Location 1",
    position: { lat: 37.7749, lng: -122.4194 },
    zoom: 14,
  },
  {
    id: 6,
    name: "Restaurant Location 2",
    position: { lat: 37.7749, lng: -122.4094 },
    zoom: 14,
  },
  {
    id: 7,
    name: "Restaurant Location 3",
    position: { lat: 37.7649, lng: -122.4194 },
    zoom: 14,
  },
];

const gasStationLocations = [
  {
    id: 8,
    name: "Gas Station Location 1",
    position: { lat: 37.7749, lng: -122.4194 },
    zoom: 14,
  },
  {
    id: 9,
    name: "Gas Station Location 2",
    position: { lat: 37.7749, lng: -122.4094 },
    zoom: 14,
  },
  {
    id: 10,
    name: "Gas Station Location 3",
    position: { lat: 37.7649, lng: -122.4194 },
    zoom: 14,
  },
];

function Home() {
  const [locationList, setLocationList] = useState([]);
  //function to update the list of locations
  const updateListData = (newListData) => {
    setLocationList(newListData);
  };

  return (
    <ListCentext.Provider value={{ locationList, updateListData }}>
    <div class="flex h-screen flex-col">
      
        <div class="bg-blue-500 border-solid border-2 border-black w-full h-12">
          <NavBar />
        </div>

        <div class=" flex flex-1 flex-row">

          <div class="order-1 w-1/4 border-solid border-2 border-black">
            <LocationListSelection 
            updateListData={updateListData}
            todoLocations={todoLocations}
            restaurantLocations={restaurantLocations}
            gasStationLocations={gasStationLocations}
            />
          </div>

          <div class='w-1/4 border-solid border-2 border-black'>
            <Locations locationList={locationList}/>
          </div>

          <div class="border-l-2 border-solid border-2 border-black w-1/2 ">

            <div class="order-2 flex-1 border-solid border-2 border-black">
              <Map locationList={locationList} />
            </div>

          </div>


        </div>
      
    </div>
     </ListCentext.Provider>
  );
}

export default Home;
