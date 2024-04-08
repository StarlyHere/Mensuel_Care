import React from 'react';

export default function Navbar() {
  return (
    <div className="flex justify-between items-center p-4">
      <img 
        className="h-16 w-16 border-2 ml-4 border-customColor rounded-full" 
        src='logo.png'
        alt="Logo"
      />
      <div className="flex space-x-4 mr-2">
        <button className="text-customColor bg-transparent hover:bg-customColor hover:text-white rounded-full px-4 py-2 transition-colors duration-300">
          Home
        </button>
        <button className="text-customColor bg-transparent hover:bg-customColor hover:text-white rounded-full px-4 py-2 transition-colors duration-300">
          About
        </button>
        <button className="text-customColor bg-transparent hover:bg-customColor hover:text-white rounded-full px-4 py-2 transition-colors duration-300">
          Donate
        </button>
        <button className="text-customColor bg-transparent hover:bg-customColor hover:text-white rounded-full px-4 py-2 transition-colors duration-300">
          Login
        </button>
      </div>
    </div>
  );
}
