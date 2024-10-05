import React from "react";
import LocationContent from "./LocationContent/LocationContent";
import MapComponent from "./Map/mapComponent";
const Location = () => {
  return (
    <div>
      <MapComponent />
      <LocationContent />
    </div>
  );
};

export default Location;
