//Imports---
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";

function Map(props) {
  return (
    <MapContainer
      center={props.center}
      zoom={12}
      style={{ height: "600px", width: "600px" }}
    >
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      />

      {/* Ternary to set up markers--- */}
      {props.markerFull.length
        ? props.markerFull.map((element, index) => {
            let restaurantPopLink = element[3];
            return (
              <Marker
                key={index}
                name={element[0]}
                position={[element[1], element[2]]}
              >
                {/* Links to the restaurants page--- */}
                <Popup>
                  <a href={`/restaurant/${restaurantPopLink}`}>{element[0]}</a>
                </Popup>
              </Marker>
            );
          })
        : null}
    </MapContainer>
  );
}

//Exports---
export default Map;
