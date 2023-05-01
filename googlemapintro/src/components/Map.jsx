import React, { useEffect, useState } from "react";
import { useMemo } from "react";
import { GoogleMap, useLoadScript, Marker } from "@react-google-maps/api";
import { useSelector } from "react-redux";
import GoogleMapReact from "google-map-react";
import LocationMarker from "./LocationMarker";

const Map = () => {
  const home = useSelector((state) => state.locationList.defaultLocation);
  const selectedLocation = useSelector(
    (state) => state.locationList.selectedLocation
  );
  const locationList = useSelector((state) => state.locationList.locationList);

  const [center, setCenter] = useState(home.position);
  const [zoom, setZoom] = useState(home.zoom);

  

const handleApiLoaded = (map, maps) => {
      const homeMarker = new maps.Marker({
        position: home.position,
        map: map,
        title: home.name,
      });

      const markers = locationList.map((location) => {
        const marker = new maps.Marker({
          position: location.position,
          map: map,
          title: location.name,
        });
        return marker;
      });

      const bounds = new maps.LatLngBounds();
      bounds.extend(homeMarker.getPosition());
      markers.forEach((marker) => bounds.extend(marker.getPosition()));
      map.fitBounds(bounds);
    };

   
  return (
    <div className="text-center h-96 w-auto">
      <GoogleMapReact
        bootstrapURLKeys={{ key: process.env.REACT_APP_GOOGLE_API_KEY }}
        center={center}
        zoom={zoom}
        yesIWantToUseGoogleMapApiInternals={true}
        onGoogleApiLoaded={({ map, maps }) => handleApiLoaded(map, maps)}
      >
        <LocationMarker
          lat={home.position.lat}
          lng={home.position.lng}
          
        />

        {/* {selectedLocation && selectedLocation.position && (
          <LocationMarker
            lat={selectedLocation.position.lat}
            lng={selectedLocation.position.lng}
            name={selectedLocation.name}
          />
        )} */}
      </GoogleMapReact>
    </div>
  );
};

export default Map;
