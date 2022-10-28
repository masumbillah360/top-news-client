import "leaflet/dist/leaflet.css";
import React from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";


const FaltuMap = () => {
  return (
    <div className="bg-secondary">
      <MapContainer
        center={[25.401481065777208, 89.79409490497223]}
        zoom={10}
        style={{ height: "300px" }}
      >
        <TileLayer
          attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={[51.505, -0.09]}>
          <Popup>
            A pretty CSS3 popup. <br /> Easily customizable.
          </Popup>
        </Marker>
      </MapContainer>
    </div>
  );
};

export default FaltuMap;
