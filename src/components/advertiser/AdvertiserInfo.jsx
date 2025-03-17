import React from 'react';
import { BuildingOfficeIcon, PhoneIcon } from '@heroicons/react/24/outline';

const AdvertiserInfo = () => {
  const handleWhatsAppClick = () => {
    window.open(`https://wa.me/5493512132855`, '_blank');
  };

  return (
    <div className="container mx-auto px-4 py-6">
      <div className="bg-white rounded-lg shadow-md p-6">
        <div className="flex items-center space-x-4 mb-6">
          <div className="h-16 w-16 bg-gray-200 rounded-full flex items-center justify-center">
            <BuildingOfficeIcon className="h-8 w-8 text-gray-500" />
          </div>
          <div>
            <h3 className="text-xl font-semibold">Inmobiliaria AGP</h3>
            <p className="text-gray-600">Agente Inmobiliario Daniel Gonzalez</p>
          </div>
        </div>

        <div className="space-y-4">
          <div className="flex items-center space-x-3">
            <PhoneIcon className="h-5 w-5 text-gray-500" />
            <span className="text-gray-700">+54 9 351 213-2855</span>
          </div>

          <button
            onClick={handleWhatsAppClick}
            className="w-full bg-[#25D366] hover:bg-[#128C7E] text-white font-semibold py-3 px-4 rounded-lg transition duration-300 flex items-center justify-center gap-2"
          >
            <svg 
              viewBox="0 0 24 24" 
              className="w-5 h-5" 
              fill="currentColor"
            >
              <path d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM16.64 15.55C16.4 16.31 15.3 16.96 14.47 17.14C13.93 17.26 13.23 17.35 11.43 16.53C9.14 15.5 7.7 13.18 7.56 13C7.43 12.83 6.33 11.33 6.33 9.78C6.33 8.23 7.09 7.5 7.36 7.21C7.59 6.97 7.93 6.88 8.25 6.88C8.36 6.88 8.46 6.89 8.55 6.89C8.82 6.9 8.96 6.91 9.15 7.33C9.38 7.85 9.91 9.4 9.97 9.54C10.04 9.68 10.08 9.84 9.99 10.03C9.36 11.42 8.66 11.36 9.1 12.02C10.26 13.71 11.3 14.25 12.81 15.12C13.14 15.3 13.3 15.27 13.47 15.07C13.63 14.87 14.14 14.27 14.32 14.03C14.5 13.79 14.68 13.83 14.92 13.92C15.16 14.01 16.71 14.77 16.97 14.9C17.23 15.03 17.4 15.09 17.47 15.21C17.53 15.34 17.53 16.03 17.29 16.79L16.64 15.55Z"/>
            </svg>
            <span>Contactar por WhatsApp</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default AdvertiserInfo;