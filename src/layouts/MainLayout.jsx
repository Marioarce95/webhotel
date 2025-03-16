import React from 'react';

const MainLayout = ({ children }) => {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Header will go here */}
      <main className="flex-grow">
        {children}
      </main>
      {/* Footer will go here */}
    </div>
  );
};

export default MainLayout;