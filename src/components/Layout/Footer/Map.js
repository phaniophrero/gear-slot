import React from "react";
import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";

const containerStyle = {
  width: "50rem",
  height: "30rem",
  borderRadius: "15px",
  left: "20px",
};

const position = {
  lat: 44.31752145306112,
  lng: 26.182558074518848,
};

const Map = () => {
  return (
    <LoadScript googleMapsApiKey={process.env.MAP_API_KEY}>
      <GoogleMap mapContainerStyle={containerStyle} center={position} zoom={18}>
        <Marker position={position} />
      </GoogleMap>
    </LoadScript>
  );
};

export default Map;
