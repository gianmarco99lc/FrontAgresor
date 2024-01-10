import React, { useState } from "react";
import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";

const Mapa = ({ isOpen, handleCloseModal, handleAgregarPunto }) => {
  const containerStyle = {
    width: "500px",
    height: "500px",
    display: "flex",
    justifyContent: "center"
  };

  const center = {
    lat: 10.465,
    lng: -66.976,
  };

  const [markerPosition, setMarkerPosition] = useState(null);

  const handleMapClick = (e) => {
    // Obtiene las coordenadas del clic en el mapa
    const { latLng } = e;
    const lat = latLng.lat();
    const lng = latLng.lng();

    // Actualiza la posición del marcador
    setMarkerPosition({ lat, lng });

    // Llama a la función para agregar el punto en el componente padre (ZonasSeguridad)
    handleAgregarPunto({ lat, lng });
  };

  return (
    isOpen && (
        <div className=".mapa">
          <h2>Zona de seguridad</h2>
          <LoadScript googleMapsApiKey="AIzaSyBcVP__otz3wxYvWgx_LUJp0DOJSDKhDV4">
            <GoogleMap
              mapContainerStyle={containerStyle}
              center={center}
              zoom={15}
              onClick={handleMapClick}
            >
              {/* Muestra el marcador en la posición actual */}
              {markerPosition && <Marker position={markerPosition} />}
            </GoogleMap>
          </LoadScript>
          <div className="modal-buttons">
            <button className="cancelar-button" onClick={handleCloseModal}>
              Cerrar
            </button>
          </div>
        </div>
    )
  );
};

export default Mapa;
