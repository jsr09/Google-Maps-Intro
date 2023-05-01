import React, { useMemo } from 'react';
import { GoogleMap, useJsApiLoader, Marker } from '@react-google-maps/api';
import {getGeocode, getlatlng} from'use-places-autocomplete';
import { ComboBox, ComboboxInput, ComboboxPopover, ComboboxList, ComboboxOption } from '@reach/combobox';
import '@reach/combobox/styles.css';

const containerStyle = {
  width: '100%',
  height: '100vh'
};



function Map() {
  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: "AIzaSyB-6yWF0UHs4nZuJhb32oKIyOM2j0T_CLo",
    libraries: ['places'],
  });

  const center = useMemo(() => ({
  lat: 33.82069,
  lng: -116.54814
}),[]);

  // const [map, setMap] = React.useState(null);

  // const onLoad = React.useCallback(function callback(map) {
  //   const bounds = new window.google.maps.LatLngBounds(center);
  //   map.fitBounds(bounds);
  //   setMap(map);
  // }, []);

  // const onUnmount = React.useCallback(function callback(map) {
  //   setMap(null);
  // }, []);

  return isLoaded ? (
    <GoogleMap
      mapContainerStyle={containerStyle}
      center={center}
      zoom={10}
      // onLoad={onLoad}
      // onUnmount={onUnmount}
    >
      <Marker position={center} />
    </GoogleMap>
  ) : <>loading...</>;
}

export default React.memo(Map);
