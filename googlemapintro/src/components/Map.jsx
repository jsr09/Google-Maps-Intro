import React, { useEffect, useRef, useState } from "react";
import { useSelector } from "react-redux";
import { GoogleMap, useJsApiLoader, Marker, LoadScript } from "@react-google-maps/api";
import { getGeocode, getlatlng } from "use-places-autocomplete";
import {
  ComboBox,
  ComboboxInput,
  ComboboxPopover,
  ComboboxList,
  ComboboxOption,
} from "@reach/combobox";
import "@reach/combobox/styles.css";
import PlacesAutocomplete from "./PlacesAutoComplete";

const containerStyle = {
  width: "100%",
  height: "100vh",
};
const libraries = ['places']

function Map() {
  const mapRef = useRef(null);
  const [mapCenter, setMapCenter] = useState(null);
  const [selected, setSelected] = useState(null);

  const home = useSelector((state) => state.locationList.defaultLocation);
  console.log("Line 17 In Map>>>Home", home);

  const locationList = useSelector((state) => state.locationList.locationList);
  console.log("Line 20 In Map>>>locationList", locationList);

  const location = useSelector((state) => state.locationList.selectedLocation);
  console.log("Line 23 In Map>>>location", location);

  useEffect(() => {
    if (location.id) {
      // If a location is selected, center on the selected location
      setMapCenter(location.position);
    } else if (locationList.length) {
      // If a list of locations is selected, center on all locations
      const bounds = new window.google.maps.LatLngBounds();
      bounds.extend(home.position);
      locationList.forEach((location) => bounds.extend(location.position));
      mapRef.current.fitBounds(bounds);
      setMapCenter({
        lat: bounds.getCenter().lat(),
        lng: bounds.getCenter().lng(),
      });
    } else {
      // Otherwise, center on the default home location
      setMapCenter(home.position);
    }
  }, [home.position, location, locationList]);

  const onMapLoad = React.useCallback((map) => {
    mapRef.current = map;
  }, []);

  return (
    <>
    <div className='border rounded-lg py-2 px-3 text-grey-darkest'><PlacesAutocomplete setSelected={setSelected}/></div>
    <LoadScript googleMapsApiKey="AIzaSyB-6yWF0UHs4nZuJhb32oKIyOM2j0T_CLo" libraries={libraries}>
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={mapCenter}
        zoom={location.zoom || home.zoom}
        onLoad={onMapLoad}
      >
        {location.id ? (
          <Marker position={location.position} />
        ) : (
          locationList.length > 0 ? (
            locationList.map((location) => (
              <Marker key={location.id} position={location.position} />
            ))
          ) : (
            <>Loading...Maybe...</> 
          )
        )}
      </GoogleMap>
    </LoadScript>
    </>
  );
};

export default Map;
