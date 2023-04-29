import React from "react";
import {useState, useEffect} from 'react'
import { useSelector, useDispatch } from "react-redux";



const Locations = () => {
    const {locationList} = useSelector((state) => state.locationList);
    console.log('Line 9 locationList>>>', locationList)

    

    return (
        <div>
             <ul>
        {locationList.length > 0 ? (
          locationList.map((location) => (
            <li key={location.id}>
              {location.name}
            </li>
          ))
        ) : (
          <h1>Loading...</h1>
        )}
      </ul>
        </div>
    );
};

export default Locations;