import { LatLngExpression } from "leaflet";
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import "leaflet/dist/leaflet.css";

const Map = ({ lat, lng }: { lat: number; lng: number }) => {
  return (
    <MapContainer
      center={[lat, lng] as LatLngExpression}
      zoom={13}
      scrollWheelZoom={false}
      style={{height:"160px", width: "100%",borderRadius:"8px",zIndex:5 }}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker position={[lat, lng] as LatLngExpression}>
        <Popup>مکان شما اینجاست!</Popup>
      </Marker>
    </MapContainer>
  );
};

export default Map;
