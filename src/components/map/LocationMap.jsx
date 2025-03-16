import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';

// Fix for default marker icon
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon-2x.png',
  iconUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png',
  shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png',
});

const LocationMap = () => {
  const position = [-31.921920, -64.500771]; // Villa Ciudad Parque coordinates

  return (
    <div className="container mx-auto px-4 py-6">
      <div className="bg-white rounded-lg shadow-md p-6">
        <h3 className="text-xl font-semibold mb-6">Ubicación</h3>
        
        <div style={{ height: '400px', width: '100%' }}>
          <MapContainer 
            center={position} 
            zoom={15} 
            style={{ height: '100%', width: '100%' }}
          >
            <TileLayer
              attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <Marker position={position}>
              <Popup>
                Hotel Santa Lucía<br/>
                Ruta N5 - km71 (5194)<br/>
                Villa Ciudad Parque
              </Popup>
            </Marker>
          </MapContainer>
        </div>

        <div className="mt-4">
          <p className="text-gray-600">
            Ruta N5 - km71 (5194), Villa Ciudad Parque Valle de Calamuchita, Córdoba - Argentina
          </p>
          <p className="text-sm text-gray-500 mt-1">
            La ubicación es aproximada
          </p>
        </div>
      </div>
    </div>
  );
};

export default LocationMap;