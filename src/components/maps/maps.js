import React from "react";
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';

function Maps(){
    const position = [40.730610, -73.935242,]
    return(
        <MapContainer center={position} zoom={12} scrollWheelZoom={false}>
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">FrontEnd Test Aditya Adi Prabowo</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          <Marker position={position}>
            <Popup>
              A pretty CSS3 popup. <br /> Easily customizable.
            </Popup>
          </Marker>
        </MapContainer>
    );
}

export default Maps;