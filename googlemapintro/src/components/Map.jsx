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

  const markers = useMemo(() => {
    return locationList.map((location) => {
      return {
        position: location.position,
        title: location.name,
      };
    });
  }, [locationList]);

  const bounds = useMemo(() => {
    const bounds = new window.google.maps.LatLngBounds();
    bounds.extend(home.position);
    markers.forEach((marker) => bounds.extend(marker.position));
    return bounds;
  }, [markers, home]);

const handleApiLoaded = (map, maps) => {

    markers.forEach((marker) => {
      new maps.Marker({
        position: marker.position,
        map: map,
        title: marker.title,
      });
    });

    map.fitBounds(bounds);
  };


  //   const bounds = new maps.LatLngBounds();
  //   bounds.extend(homeMarker.getPosition());
  //   markers.forEach((marker) => bounds.extend(marker.getPosition()));
  //   map.fitBounds(bounds);
  // }, [home, locationList]);

   
  return (
    <div className="text-center h-96 w-auto">
      <GoogleMapReact
        bootstrapURLKeys={{ key: "AIzaSyB-6yWF0UHs4nZuJhb32oKIyOM2j0T_CLo" }}
        center={center}
        zoom={zoom}
        yesIWantToUseGoogleMapApiInternals={true}
        onGoogleApiLoaded={({ map, maps }) => handleApiLoaded(map, maps)}
      >
        {/* <LocationMarker
          lat={home.position.lat}
          lng={home.position.lng}
          
        />

        {selectedLocation && selectedLocation.position && (
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
