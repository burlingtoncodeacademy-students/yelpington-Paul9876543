//Imports---
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import { useMap } from "react-leaflet";

//Export---
export default Map;

//Function to reset the view
function MyComponent({ center }) {
  const map = useMap();
  map.setView(center);
  return null;
}

function Map(props) {
  return (
    <MapContainer
      center={props.center}
      zoom={16}
      style={{ height: "600px", width: "600px" }}
    >
      {/* returning to center--- */}
      <MyComponent center={props.center} />
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      />
      {/* Passing name and center from the restaurant fetch--- */}
      <Marker position={props.center}>
        <Popup>{props.name}</Popup>
      </Marker>
    </MapContainer>
  );
}
