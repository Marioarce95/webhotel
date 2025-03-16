import React from 'react';
import { HomeIcon, Square2StackIcon, BeakerIcon, ArrowsPointingOutIcon } from '@heroicons/react/24/outline';

const PropertyInfo = () => {
  return (
    <div className="container mx-auto px-4 py-6">
      <div className="bg-white rounded-lg shadow-md p-6">
        <div className="mb-6">
          <h2 className="text-3xl font-bold text-zonaprop-orange">USD 450.000</h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
          <div className="flex items-center space-x-2">
            <HomeIcon className="h-6 w-6 text-gray-500" />
            <span className="text-gray-700">4 Ambientes</span>
          </div>
          <div className="flex items-center space-x-2">
            <Square2StackIcon className="h-6 w-6 text-gray-500" />
            <span className="text-gray-700">3 Dormitorios</span>
          </div>
          <div className="flex items-center space-x-2">
            <BeakerIcon className="h-6 w-6 text-gray-500" />
            <span className="text-gray-700">2 Baños</span>
          </div>
          <div className="flex items-center space-x-2">
            <ArrowsPointingOutIcon className="h-6 w-6 text-gray-500" />
            <span className="text-gray-700">250 m²</span>
          </div>
        </div>

        <div className="prose max-w-none">
          <h3 className="text-xl font-semibold mb-3">Descripción</h3>
          <p className="text-gray-600">
            Hermosa quinta en venta ubicada en una zona tranquila de Quilmes. 
            La propiedad cuenta con amplios espacios verdes, piscina y quincho. 
            Ideal para familia que busca tranquilidad y confort.
          </p>
        </div>
      </div>
    </div>
  );
};

export default PropertyInfo;