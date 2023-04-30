import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {setSelectedLocation} from "../store/index";

import GoogleMapReact from "google-map-react";
import LocationMarker from "./LocationMarker";



const Map = () => {
const dispatch = useDispatch();

const home = useSelector((state) => state.locationList.defaultLocation);
console.log('Line 12 HOME>>>', home);
const selectedLocation = useSelector((state) => state.locationList.selectedLocation);
console.log('line 13 SELECTED LOCATION>>>', selectedLocation);
const locationList = useSelector((state) => state.locationList.locationList);
console.log('line 16 LOCATION LIST>>>', locationList);

    
  const [center, setCenter] = useState();
  const [zoom, setZoom] = useState();

  useEffect(() => {
    if (selectedLocation) {
      setCenter(selectedLocation.position);
      setZoom(selectedLocation.zoom);
    } else {
      setCenter(home.position);
      setZoom(home.zoom);
    }
  },[selectedLocation, home]);

  useEffect(() => {
    if (locationList) {
      dispatch(setSelectedLocation(locationList[0]));
    }
  }, [locationList, dispatch]);

  return (
    <div className="text-center h-96 w-auto">
      <GoogleMapReact
        bootstrapURLKeys={{ key: process.env.REACT_APP_GOOGLE_API_KEY }}
        center={center}
        zoom={zoom}
      >
        {locationList.length > 0 &&
          locationList.map((location) => (
            <LocationMarker
              key={location.id}
              lat={location.position.lat}
              lng={location.position.lng}
              name={location.name}
            />
          ))}
        {!selectedLocation && (
          <LocationMarker lat={home.position.lat} lng={home.position.lng} name={home.name} />
        )}
      </GoogleMapReact>
     
    </div>
  );
};

export default Map;
