import React from "react";
import NavBar from "./NavBar";

const Issues = () => {
  return (
    <div>
      <div className=" border-2 w-full h-12">
        <NavBar />
      </div>

      <div className="text-center font-extrabold leading-loose">Issues</div>

      <ul className="text-center leading-loose">
        <li>Using dotenv with react in a browser - dotenv-webpack</li>
        <li>Map would initial not render - React.StrictMode</li>
        <li>Tailwind folding</li>
        <li>Map would not re-center if page was refreshed - used local storage to store a default/current location</li>
        <li>Managing state- attempted to use react createContext instead of redux</li>
        <li>Google-map-ract seems to be made for those who want to customize their map</li>
        <li>@react-google-maps/api doesn't like Tailwindcss</li>
      </ul>

    </div>
  );
};

export default Issues;
