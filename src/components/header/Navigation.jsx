import React from 'react';

const Navigation = () => {
  return (
    <nav className="hidden md:flex items-center space-x-6">
      <a href="#" className="text-gray-700 hover:text-zonaprop-blue">Comprar</a>
      <a href="#" className="text-gray-700 hover:text-zonaprop-blue">Alquilar</a>
      <a href="#" className="text-gray-700 hover:text-zonaprop-blue">Vender</a>
      <a href="#" className="text-gray-700 hover:text-zonaprop-blue">Tasaciones</a>
    </nav>
  );
};

export default Navigation;