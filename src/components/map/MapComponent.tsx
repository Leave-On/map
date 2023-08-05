import { MapContainer, TileLayer, Popup, Marker } from "react-leaflet";
import { FC } from "react";
import cls from "./MapComponent.module.scss";
export const MapComponent: FC = () => {
  return (
    <div className={cls.MapComponent}>
      <MapContainer
        center={[51.505, -0.09]}
        zoom={8}
        scrollWheelZoom={false}
        className={cls.MapComponent}
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
