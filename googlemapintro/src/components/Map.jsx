import React  from "react";


import GoogleMapReact from "google-map-react";



const Map = () => {
    const defaultProps = {
        center: {
            lat: 40.7128,
            lng: -74.0059
        },
        zoom: 12,
    };
return (
    <div className="text-center h-96 w-auto">
        <GoogleMapReact
            bootstrapURLKeys={{ key: process.env.REACT_APP_GOOGLE_API_KEY }}
            defaultCenter={defaultProps.center}
            defaultZoom={defaultProps.zoom}
        >
            
        </GoogleMapReact>
        <h1>Map</h1>
    </div>
)
};

export default Map;