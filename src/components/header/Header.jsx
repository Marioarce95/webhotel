import React from 'react';
import Logo from './Logo';
import SearchBar from './SearchBar';
import Navigation from './Navigation';
import UserIcons from './UserIcons';

const Header = () => {
  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-4 py-3">
        <div className="flex items-center justify-between space-x-4">
          <Logo />
          <SearchBar />
          <Navigation />
          <UserIcons />
        </div>
      </div>
    </header>
  );
};

export default Header;