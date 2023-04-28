import React, { useState, useEffect } from "react";

import GoogleMapReact from "google-map-react";

const defaultCenter = {
  position: {
    lat: 40.7128,
    lng: -74.0059,
  },
};
const defaultZoom = 11;

const locations = [
  {
    id: 1,
    name: "Marker 1",
    position: { lat: 37.7749, lng: -122.4194 },
    zoom: 14,
  },
  {
    id: 2,
    name: "Marker 2",
    position: { lat: 37.7749, lng: -122.4094 },
    zoom: 14,
  },
  {
    id: 3,
    name: "Marker 3",
    position: { lat: 37.7649, lng: -122.4194 },
    zoom: 14,
  },
];

const Map = () => {
  const [selectedLocation, setSelectedLocation] = useState(null);
  const [center, setCenter] = useState(
    JSON.parse(localStorage.getItem("center")) || defaultCenter.position
  );
  const [zoom, setZoom] = useState(
    JSON.parse(localStorage.getItem("zoom")) || defaultZoom
  );

  useEffect(() => {
    if (selectedLocation) {
      setCenter(selectedLocation.position);
      setZoom(selectedLocation.zoom || zoom);
      localStorage.setItem("center", JSON.stringify(selectedLocation.position));
    }
  }, [selectedLocation, zoom]);

  useEffect(() => {
    const storedLocation = localStorage.getItem("selectedlocation");
    if (storedLocation) {
      setSelectedLocation(JSON.parse(storedLocation));
    }
  }, []);

  const handleLocationClick = (location) => {
    setSelectedLocation(location);
  };

  return (
    <div className="text-center h-96 w-auto">
      <GoogleMapReact
        bootstrapURLKeys={{ key: process.env.REACT_APP_GOOGLE_API_KEY }}
        center={center}
        zoom={zoom}
      ></GoogleMapReact>
      <h1>Locations</h1>
      <ul>
        {locations.map((location) => (
          <li key={location.id} onClick={() => handleLocationClick(location)}>
            {location.name}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Map;
