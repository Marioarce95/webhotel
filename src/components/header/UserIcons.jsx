import React from 'react';
import { UserIcon, HeartIcon } from '@heroicons/react/24/outline';

const UserIcons = () => {
  return (
    <div className="flex items-center space-x-4">
      <button className="p-1 hover:text-zonaprop-blue">
        <HeartIcon className="h-6 w-6" />
      </button>
      <button className="p-1 hover:text-zonaprop-blue">
        <UserIcon className="h-6 w-6" />
      </button>
    </div>
  );
};

export default UserIcons;