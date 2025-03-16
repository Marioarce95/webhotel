import React from 'react';
import { BuildingOfficeIcon, PhoneIcon } from '@heroicons/react/24/outline';

const AdvertiserInfo = () => {
  return (
    <div className="container mx-auto px-4 py-6">
      <div className="bg-white rounded-lg shadow-md p-6">
        <div className="flex items-center space-x-4 mb-6">
          <div className="h-16 w-16 bg-gray-200 rounded-full flex items-center justify-center">
            <BuildingOfficeIcon className="h-8 w-8 text-gray-500" />
          </div>
          <div>
            <h3 className="text-xl font-semibold">Inmobiliaria Example</h3>
            <p className="text-gray-600">Agente Inmobiliario Profesional</p>
          </div>
        </div>

        <div className="space-y-4">
          <div className="flex items-center space-x-3">
            <PhoneIcon className="h-5 w-5 text-gray-500" />
            <span className="text-gray-700">+54 11 1234-5678</span>
          </div>

          <div className="border-t pt-4">
            <p className="text-sm text-gray-500">
              Miembro desde 2020
            </p>
            <p className="text-sm text-gray-500">
              100+ propiedades publicadas
            </p>
          </div>

          <button
            className="w-full bg-zonaprop-blue hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-lg transition duration-300"
          >
            Ver más propiedades
          </button>
        </div>
      </div>
    </div>
  );
};

export default AdvertiserInfo;