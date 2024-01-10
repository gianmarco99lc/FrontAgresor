import React, { useState, useEffect } from 'react';
import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";

const Home = () => {
  const [currentPosition, setCurrentPosition] = useState(null);


  const containerStyle = {
    width: "100%",
    height: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  };

  useEffect(() => {
    // Función para obtener la posición actual del usuario
    const getCurrentLocation = () => {
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(
          (position) => {
            const { latitude, longitude } = position.coords;
            setCurrentPosition({ lat: latitude, lng: longitude });
          },
          (error) => {
            console.error('Error getting current location:', error.message);
          }
        );
      } else {
        console.error('Geolocation is not supported by your browser.');
      }
    };

    // Obtener la posición actual cuando el componente se monta
    getCurrentLocation();
  }, []); // La dependencia vacía asegura que se ejecute solo una vez al montar el componente

  return (
    <div>
      <h1>Eres el agresor!</h1>
      <div style={{ height: '400px' }}>
        {/* Mapa */}
        <LoadScript googleMapsApiKey="AIzaSyBcVP__otz3wxYvWgx_LUJp0DOJSDKhDV4">
          <GoogleMap
            mapContainerStyle={containerStyle}
            center={currentPosition || { lat: 10.465, lng: -66.976 }}
            zoom={12}
          >
            {/* Puedes agregar un marcador si lo deseas */}
            {currentPosition && <Marker position={currentPosition} />}
          </GoogleMap>
        </LoadScript>
      </div>
    </div>
  );
}

export default Home;