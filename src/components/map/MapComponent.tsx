import { MapContainer, TileLayer, Popup, Marker } from 'react-leaflet'
import { FC } from "react";

export const MapComponent: FC = () => {


  return (
    <MapContainer center={[51.505, -0.09]} zoom={8} scrollWheelZoom={false}>
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
  );
};
