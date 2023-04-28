import React from "react";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <nav className="flex justify-between items-center bg-blue-500 text-white px-6 h-12">
      <div>
        <Link to="/" className="mr-4">Home</Link>
      </div>
      <h2 className="text-lg font-semibold">Your Day</h2>
      <div>
        <Link to="/issues" className="mr-4">Issues</Link>
        <Link to="/futurefeatures">Future Features</Link>
      </div>
    </nav>
  );

};


export default NavBar;