import React from "react";

const Locations = (props) => {
    const { locationList } = props;
    console.log('Line 5 Locations>>>', locationList)

    return (
        <div>
             <ul>
        {locationList ? (
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