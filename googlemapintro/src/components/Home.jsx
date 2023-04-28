import React from "react";
import { Routes, Route } from "react-router-dom";
import MyContext from "react";
import { useEffect, useState } from "react";
import NavBar from "./NavBar";
import SideBar from "./SideBar";
import Map from "./Map";

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
              <Map locationList={locationList} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
