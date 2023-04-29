import React from "react";
import { useDispatch } from "react-redux";
import { setLocationList } from "../store/index";

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

const LocationListSelection = () => {
  const dispatch = useDispatch();

  const handleClick = (locations) => {
    dispatch(setLocationList(locations));
  };

  return (
    <>
      <div className="text-center">List</div>

      <div className="w-2/3 mx-auto">
        <button
          className="w-full bg-white text-blue-500 font-bold py-2 px-4 rounded-full mb-4 hover:bg-blue-500 hover:text-white"
          onClick={() => handleClick(todoLocations)}
        >
          Todo
        </button>
        <button
          className="w-full bg-white text-blue-500 font-bold py-2 px-4 rounded-full mb-4 hover:bg-blue-500 hover:text-white"
          onClick={() => handleClick(restaurantLocations)}
        >
          Restaurants
        </button>
        <button
          className="w-full bg-white text-blue-500 font-bold py-2 px-4 rounded-full mb-4 hover:bg-blue-500 hover:text-white"
          onClick={() => handleClick(gasStationLocations)}
        >
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
