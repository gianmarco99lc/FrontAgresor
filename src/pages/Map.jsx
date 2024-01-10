import React, { Component } from 'react';
import { MapContainer, TileLayer, Marker, Polygon } from 'react-leaflet';

class Map extends Component {
  constructor(props) {
    super(props);
    // Definimos el estado con las propiedades del mapa
    this.state = {
      position: [51.505, -0.09],
      points: [[51.5, -0.1], [51.51, -0.06], [51.52, -0.03]],
      polygon: [[51.5, -0.1], [51.51, -0.06], [51.52, -0.03], [51.5, -0.1]],
    };
  }

  render() {
    // Extraemos las propiedades del estado
    const { position, points, polygon } = this.state;
    return (
      <MapContainer center={position} zoom={13} scrollWheelZoom={false}>
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        {points.map((point, index) => (
          <Marker key={index} position={point} />
        ))}
        <Polygon positions={polygon} />
      </MapContainer>
    );
  }
}

export default Map;