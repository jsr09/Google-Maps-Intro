import React from "react";
import { useDispatch } from "react-redux";
import { setLocationList } from "../store/index";

const todoLocations = [
  {
    id: 2,
    name: "Hair Cut",
    position: { lat: 33.81949, lng: -116.53254 },
    zoom: 20,
  },
  {
    id: 3,
    name: "Bank Robbery",
    position: { lat: 33.82291, lng: -116.54134 },
    zoom: 20,
  },
  {
    id: 4,
    name: "Golf League",
    position: { lat: 33.82828, lng: -116.54865 },
    zoom: 20,
  },
];

const restaurantLocations = [
  {
    id: 5,
    name: "Shamrocks Irish Pub",
    position: { lat: 33.82561, lng: -116.54669 },
    zoom: 18,
  },
  {
    id: 6,
    name: "China King Restaurant",
    position: { lat: 33.82655, lng: -116.54582 },
    zoom: 18,
  },
  {
    id: 7,
    name: "Blaze Pizza",
    position: { lat: 33.82538, lng: -116.54701 },
    zoom: 18,
  },
];

const gasStationLocations = [
  {
    id: 8,
    name: "Shell Gas Station",
    position: { lat: 33.82702, lng: -116.54542 },
    zoom: 16,
  },
  {
    id: 9,
    name: "Mobile Gas Station",
    position: { lat: 33.80110, lng: -116.52667 },
    zoom: 16,
  },
  {
    id: 10,
    name: "ARCO Gas Station",
    position: { lat: 33.84428, lng: -116.52773 },
    zoom: 16,
  },
];

const LocationListSelection = () => {
  const dispatch = useDispatch();

  const handleClick = (locations) => {
    dispatch(setLocationList(locations));
  };

  return (
    <>
      <div className="text-center underline-offset-4">Where to</div>

      <div className="w-3/4 mx-auto">
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
