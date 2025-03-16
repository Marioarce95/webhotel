import React from 'react';
import { ChevronRightIcon, HomeIcon } from '@heroicons/react/24/outline';

const Breadcrumbs = () => {
  const breadcrumbs = [
    { name: 'Inicio', href: '/' },
    { name: 'Comprar', href: '/comprar' },
    { name: 'Casas', href: '/comprar/casas' },
    { name: 'Quilmes', href: '/comprar/casas/quilmes' },
    { name: 'Quinta en venta', href: '#' }
  ];

  return (
    <nav className="container mx-auto px-4 py-3">
      <ol className="flex items-center space-x-2 text-sm text-gray-500">
        {breadcrumbs.map((item, index) => (
          <li key={index} className="flex items-center">
            {index === 0 ? (
              <HomeIcon className="h-4 w-4 mr-2" />
            ) : (
              <ChevronRightIcon className="h-4 w-4 mr-2" />
            )}
            <a
              href={item.href}
              className={`hover:text-zonaprop-blue ${
                index === breadcrumbs.length - 1
                  ? 'text-gray-900 font-medium'
                  : ''
              }`}
            >
              {item.name}
            </a>
          </li>
        ))}
      </ol>
    </nav>
  );
};

export default Breadcrumbs;