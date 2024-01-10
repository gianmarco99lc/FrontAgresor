import React, { useState } from "react";
import Button from "@mui/material/Button";
import Mapa from "./Mapa";
import IconButton from "@mui/material/IconButton";
import DeleteIcon from "@mui/icons-material/Delete";

const ZonasSeguridad = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const [puntosControl, setPuntosControl] = useState([]);
  const [coordenadasInput, setCoordenadasInput] = useState({ lat: 0, lng: 0 });

  const handleVerPuntosControl = () => {
    setModalVisible(true);
  };

  const handleCerrarModal = () => {
    setModalVisible(false);
  };

  const handleAgregarPunto = (coordenadas) => {
    // Agrega el nuevo punto de control a la lista
    setPuntosControl([...puntosControl, coordenadas]);

    // Actualiza el estado para mostrar las coordenadas en el input
    setCoordenadasInput(coordenadas);
  };

  const handleEliminarPunto = (index) => {
    const nuevaLista = puntosControl.filter((_, i) => i !== index);
    setPuntosControl(nuevaLista);
  };

  return (
    <div className="contenedor-usuarios">
      {/* <div className="titulo">
        <h1></h1>
      </div> */}
      <div className="">
        <table className="tabla-usuarios">
          <thead>
            <tr>
              <th>Sentencia</th>
              <th>Víctima</th>
              <th>Agresor</th>
              <th>Acciones</th>
            </tr>
          </thead>
          <tbody>
            {/* Puedes mapear tu data aquí si la tienes */}
            <tr>
              <td>Sentencia 1</td>
              <td>Víctima A</td>
              <td>Agresor B</td>
              <td>
                <Button className="ver-button" onClick={handleVerPuntosControl}>
                  Ver
                </Button>
              </td>
            </tr>
            {/* Más filas aquí */}
          </tbody>
        </table>
      </div>

      {modalVisible && (
        <div className="modal">
          <div className="modal-content contenedor">
            <div>
              <Mapa
                isOpen={modalVisible}
                handleCloseModal={handleCerrarModal}
                handleAgregarPunto={handleAgregarPunto}
              />
            </div>
            <div>
              <div>
                <h2>Coordenadas:</h2>
                <input
                  type="text"
                  value={`Latitud: ${coordenadasInput.lat}`}
                  readOnly
                />
                <input
                  type="text"
                  value={`Longitud: ${coordenadasInput.lng}`}
                  readOnly
                />
              </div>

              <div>
                <button
                  className="agregar-punto-button"
                  onClick={() => handleAgregarPunto(coordenadasInput)}
                >
                  Agregar Punto
                </button>
              </div>

              <div className="tabla-container">
              <table className="data-table">
                <thead>
                  <tr>
                    <th>Latitud</th>
                    <th>Longitud</th>
                    <th>Acciones</th>
                  </tr>
                </thead>
                <tbody>
                  {puntosControl.map((punto, index) => (
                    <tr key={index}>
                      <td>{punto.lat}</td>
                      <td>{punto.lng}</td>
                      <td>
                        {/* <button onClick={() => handleEliminarPunto(index)}>
                          Eliminar
                        </button> */}
                        <IconButton
                          aria-label="delete"
                          onClick={() => handleEliminarPunto(index)}
                        >
                          <DeleteIcon />
                        </IconButton>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
              </div>
              
            </div>
            <div className="modal-buttons"></div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ZonasSeguridad;
