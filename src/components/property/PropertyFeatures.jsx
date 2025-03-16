import React from 'react';
import { CheckCircleIcon } from '@heroicons/react/24/outline';

const PropertyFeatures = () => {
  const features = [
    'Piscina',
    'Quincho',
    'Jardín',
    'Cochera para 2 autos',
    'Seguridad 24hs',
    'Agua corriente',
    'Gas natural',
    'Electricidad',
    'Internet',
    'Aire acondicionado'
  ];

  return (
    <div className="container mx-auto px-4 py-6">
      <div className="bg-white rounded-lg shadow-md p-6">
        <h3 className="text-xl font-semibold mb-4">Características</h3>
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