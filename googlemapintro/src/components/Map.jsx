// import React, { useState, useEffect } from "react";
// import { useDispatch, useSelector } from "react-redux";

// import GoogleMapReact from "google-map-react";



// const Map = () => {
// const useDispatch = useDispatch();
// const home = useSelector((state) => state);

//   localStorage.setItem(
//     "home",
//     JSON.stringify({ center: home.position, zoom: home.zoom })
//   );

//   //   const [startLocation, setStartLocation] = useState(home);
//   const [selectedLocation, setSelectedLocation] = useState(null);
//   const [center, setCenter] = useState(
//     JSON.parse(localStorage.getItem("center")) || home.position
//   );
//   const [zoom, setZoom] = useState(
//     JSON.parse(localStorage.getItem("zoom")) || home.zoom
//   );

//   useEffect(() => {
//     if (selectedLocation) {
//       setCenter(selectedLocation.position);
//       const newZoom =
//         selectedLocation.zoom !== undefined ? selectedLocation.zoom : zoom;
//       setZoom(newZoom);
//       localStorage.setItem("center", JSON.stringify(selectedLocation.position));
//     }
//   }, [selectedLocation, zoom]);

//   useEffect(() => {
//     const storedLocation = localStorage.getItem("selectedlocation");
//     if (storedLocation) {
//       setSelectedLocation(JSON.parse(storedLocation));
//     }
//   }, []);

//   const handleLocationClick = (location) => {
//     setSelectedLocation(location);
//   };

//   return (
//     <div className="text-center h-96 w-auto">
//       <GoogleMapReact
//         bootstrapURLKeys={{ key: process.env.REACT_APP_GOOGLE_API_KEY }}
//         center={center}
//         zoom={zoom}
//       ></GoogleMapReact>
     
//     </div>
//   );
// };

// export default Map;
