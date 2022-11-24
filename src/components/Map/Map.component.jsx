import React, { useContext } from "react";
import { MapContainerWrapper } from "./Map.styles";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import { Icon } from "leaflet";
import { IpContext } from "../../context/IpData.context";
// import Markerposition from "./Markerposition.component";

const locationIcon = new Icon({
  iconUrl: "../../images/icon-location.svg",
  iconSize: [25, 25],
});

const Map = () => {
  const { ipData } = useContext(IpContext);
  const address = ipData;

  const position = [51.505, -0.09];

  return (
    <MapContainerWrapper>
      <MapContainer
        center={position}
        zoom={13}
        scrollWheelZoom={true}
        style={{ height: "100vh", width: "100vw" }}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={position}>
          <Popup>Hey its me</Popup>
        </Marker>
        {/* <Markerposition address={position} /> */}
      </MapContainer>
    </MapContainerWrapper>
  );
};

export default Map;
