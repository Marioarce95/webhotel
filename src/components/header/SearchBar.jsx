import React from 'react';
import { MagnifyingGlassIcon } from '@heroicons/react/24/outline';

const SearchBar = () => {
  return (
    <div className="flex-grow max-w-2xl">
      <div className="relative">
        <input
          type="text"
          placeholder="Buscar propiedades..."
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-zonaprop-blue focus:border-transparent"
        />
        <MagnifyingGlassIcon 
          className="h-5 w-5 text-gray-400 absolute right-3 top-1/2 transform -translate-y-1/2"
        />
      </div>
    </div>
  );
};

export default SearchBar;