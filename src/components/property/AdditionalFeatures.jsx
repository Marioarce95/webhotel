import React from 'react';
import { BuildingOfficeIcon, HomeModernIcon, BoltIcon, WifiIcon } from '@heroicons/react/24/outline';

const AdditionalFeatures = () => {
  const additionalInfo = {
    propertyType: {
      icon: <HomeModernIcon className="h-6 w-6" />,
      title: 'Tipo de propiedad',
      value: 'Hotel'
    },
    condition: {
      icon: <BuildingOfficeIcon className="h-6 w-6" />,
      title: 'Estado',
      value: 'Excelente'
    },
    services: {
      icon: <BoltIcon className="h-6 w-6" />,
      title: 'Servicios',
      items: ['Agua', 'Luz', 'Gas', 'Cloacas']
    },
    amenities: {
      icon: <WifiIcon className="h-6 w-6" />,
      title: 'Instalaciones',
      items: ['WiFi', 'Calefacción', 'Aire acondicionado', 'Sistema de seguridad']
    }
  };

  return (
    <div className="container mx-auto px-4 py-6">
      <div className="bg-white rounded-lg shadow-md p-6">
        <h3 className="text-xl font-semibold mb-6">Información Adicional</h3>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="flex items-start space-x-3">
            {additionalInfo.propertyType.icon}
            <div>
              <h4 className="font-medium">{additionalInfo.propertyType.title}</h4>
              <p className="text-gray-600">{additionalInfo.propertyType.value}</p>
            </div>
          </div>

          <div className="flex items-start space-x-3">
            {additionalInfo.condition.icon}
            <div>
              <h4 className="font-medium">{additionalInfo.condition.title}</h4>
              <p className="text-gray-600">{additionalInfo.condition.value}</p>
            </div>
          </div>

          <div className="flex items-start space-x-3">
            {additionalInfo.services.icon}
            <div>
              <h4 className="font-medium">{additionalInfo.services.title}</h4>
              <ul className="text-gray-600 list-disc list-inside">
                {additionalInfo.services.items.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            </div>
          </div>

          <div className="flex items-start space-x-3">
            {additionalInfo.amenities.icon}
            <div>
              <h4 className="font-medium">{additionalInfo.amenities.title}</h4>
              <ul className="text-gray-600 list-disc list-inside">
                {additionalInfo.amenities.items.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdditionalFeatures;