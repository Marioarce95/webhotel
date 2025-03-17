import React from 'react';
import { HomeIcon, Square2StackIcon, BeakerIcon, ArrowsPointingOutIcon } from '@heroicons/react/24/outline';

const PropertyInfo = () => {
  return (
    <div className="container mx-auto px-4 py-6">
      <div className="bg-white rounded-lg shadow-md p-6">
        <div className="mb-6">
          <h2 className="text-3xl font-bold text-zonaprop-orange">USD 750.000</h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
          <div className="flex items-center space-x-2">
            <HomeIcon className="h-6 w-6 text-gray-500" />
            <span className="text-gray-700">29 Ambientes</span>
          </div>
          <div className="flex items-center space-x-2">
            <Square2StackIcon className="h-6 w-6 text-gray-500" />
            <span className="text-gray-700">29 Dormitorios</span>
          </div>
          <div className="flex items-center space-x-2">
            <BeakerIcon className="h-6 w-6 text-gray-500" />
            <span className="text-gray-700">32 Baños</span>
          </div>
          <div className="flex items-center space-x-2">
            <ArrowsPointingOutIcon className="h-6 w-6 text-gray-500" />
            <span className="text-gray-700">3200 m² Totales - 1800 m² Cubiertos</span>
          </div>
        </div>

        <div className="prose max-w-none">
          <h3 className="text-xl font-semibold mb-3">Descripción</h3>
          <p className="text-gray-600">
          Hotel Santa Lucía, ubicado sobre Ruta N5 - Km 71, Villa Ciudad Parque, Valle de Calamuchita, Córdoba, en una zona turística de alta demanda. Cuenta con piscina semiolímpica (8x25 m), piscina para niños, cocheras cubiertas, quincho con asadores, lavandería, cancha de vóley y fútbol 5, además de juegos infantiles. Una propiedad ideal para continuar su explotación hotelera o desarrollar nuevos proyectos turísticos. Documentación en regla. Listo para transferir. 📞 Consultanos para más información.
          </p>
        </div>
      </div>
    </div>
  );
};

export default PropertyInfo;