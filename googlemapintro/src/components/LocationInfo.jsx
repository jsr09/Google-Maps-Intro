import React from "react";
import { useSelector } from "react-redux";


const LocationInfo = () => {
  const selectedLocation = useSelector((state) => state.selectedLocation);
  console.log('Line 9 SELECTED LOCATION>>>', selectedLocation)

  if(!selectedLocation) {
    return <p>There is no state</p>;
  }

  return (
    <div>
      
        <div>
          <h2>{selectedLocation.name}</h2>
          <p>Latitude: {selectedLocation.position.lat}</p>
          <p>Longitude: {selectedLocation.position.lng}</p>
        </div>
      
        
    
    </div>
  );
};

export default LocationInfo;
