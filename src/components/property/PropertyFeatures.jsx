import React from 'react';
import { CheckCircleIcon } from '@heroicons/react/24/outline';

const PropertyFeatures = () => {
  const features = [
    'Piscina principal 8x25m',
    'Piscina para niños',
    'Cocheras cubiertas',
    'Quincho y asadores',
    'Lavandería',
    'Cancha de vóley',
    'Cancha de fútbol 5',
    'Juegos infantiles',
    'Seguridad 24hs',
    'Agua corriente',
    'Gas natural',
    'Electricidad',
    'Internet'
  ];

  return (
    <div className="container mx-auto px-4 py-6">
      <div className="bg-white rounded-lg shadow-md p-6">
        <h3 className="text-xl font-semibold mb-4">Instalaciones y Servicios</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {features.map((feature, index) => (
            <div key={index} className="flex items-center space-x-2">
              <CheckCircleIcon className="h-5 w-5 text-zonaprop-blue" />
              <span className="text-gray-700">{feature}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PropertyFeatures;