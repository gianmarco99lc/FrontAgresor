import React, { useState, useEffect } from 'react';
import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";
import axios from "axios";

const Home = () => {
  const [currentPosition, setCurrentPosition] = useState(null);
  const [clickedPosition, setClickedPosition] = useState(null);
  const [distance, setDistance] = useState(null);

  const containerStyle = {
    width: "100%",
    height: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  };

    useEffect(() => {
    const postearPosicion = async () => {
      console.log("ACTUAL POSICION", currentPosition);
      try {
        const response = await axios.post("/api/conexion", {
          _fecha: new Date(),
          _estadoConexion: true,
          _latitud: currentPosition.lat,
          _longitud: currentPosition.lng
        }, {
          headers: {
            "Content-Type": "application/json"
          }
        });
        console.log("RESPUESTA MANO", response);
      } catch(error) {
        console.log(error);
      }
    }

    if (currentPosition !== null)
      postearPosicion();

  }, [currentPosition]);

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

  const handleMapClick = (event) => {
    setClickedPosition({
      lat: event.latLng.lat(),
      lng: event.latLng.lng(),
    });
  };

  useEffect(() => {
    const calculateDistance = () => {
      if (window.google && window.google.maps && window.google.maps.geometry) {
        console.log('Distance:');
        const distanceInMeters = window.google.maps.geometry.computeDistanceBetween(
          new window.google.maps.LatLng(currentPosition),
          new window.google.maps.LatLng(clickedPosition)
        );
        console.log('Distance:');
        setDistance(distanceInMeters);
      }
    };
  
    calculateDistance();
  }, [currentPosition, clickedPosition]);

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
            onClick={handleMapClick}
          >
            {/* Marcador de posición actual */}
            {currentPosition && <Marker position={currentPosition} />}

            {/* Marcador al hacer clic */}
            {clickedPosition && <Marker position={clickedPosition} />}
          </GoogleMap>
        </LoadScript>
      </div>

      {/* Mostrar distancia en metros */}
      {distance && (
        <input
          type="text"
          value={`Distancia: ${distance.toFixed(2)} metros`}
          readOnly
        />
      )}
    </div>
  );
};

export default Home;
