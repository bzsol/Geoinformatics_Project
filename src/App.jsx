import React from "react";
import { MapContainer, TileLayer, Marker, Popup, LayersControl } from "react-leaflet";

const App = () => {
  const position = [51.505, -0.09];
  return (
    <MapContainer
      center={position}
      zoom={13}
      scrollWheelZoom={true}
      style={{ minHeight: "100vh", minWidth: "10vw" }}
    >
       <LayersControl position="topright">
        <LayersControl.BaseLayer checked name="OpenStreetMap">
          <TileLayer
            attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          </LayersControl.BaseLayer>
          <LayersControl.BaseLayer name="Satellite">
          <TileLayer
        url='https://{s}.google.com/vt/lyrs=s&x={x}&y={y}&z={z}'
        maxZoom={20}
        subdomains={['mt1', 'mt2', 'mt3']}
      />
          </LayersControl.BaseLayer>
          </LayersControl>
      
      <Marker position={position}>
        <Popup>
          A pretty CSS3 popup. <br /> Easily customizable.
        </Popup>
      </Marker>
    </MapContainer>
  );
};

export default App;