import React from 'react';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';

const LocationMap = () => {
  const mapStyles = {
    height: "400px",
    width: "100%"
  };
  
  const defaultCenter = {
    lat: -34.729531, // Quilmes coordinates
    lng: -58.263166
  };

  return (
    <div className="container mx-auto px-4 py-6">
      <div className="bg-white rounded-lg shadow-md p-6">
        <h3 className="text-xl font-semibold mb-6">Ubicación</h3>
        
        <LoadScript googleMapsApiKey={import.meta.env.VITE_GOOGLE_MAPS_API_KEY}>
          <GoogleMap
            mapContainerStyle={mapStyles}
            zoom={15}
            center={defaultCenter}
          >
            <Marker position={defaultCenter} />
          </GoogleMap>
        </LoadScript>

        <div className="mt-4">
          <p className="text-gray-600">
            Av. Example 123, Quilmes, Buenos Aires
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