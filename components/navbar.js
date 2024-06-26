import React from 'react';
import Sidebar from './Sidebar';


export default function Navbar() {
  return (
    <div className="flex justify-between items-center p-4">
      <img 
        className="h-16 w-16 border-2 ml-4 border-customColor rounded-full" 
        src='logo.png'
        alt="Logo"
      />
      
      <div className="flex space-x-4 mr-10">
      <button className="hover:text-customColor hover:bg-transparent bg-customColor text-white rounded-full px-4 py-2 transition-colors duration-300">
          <a href="/">Home</a>
        </button>
        <button className="hover:text-customColor hover:bg-transparent bg-customColor text-white rounded-full px-4 py-2 transition-colors duration-300">
          <a href='/Doctors'>Appointment</a>
          
        </button>
        <button className="hover:text-customColor hover:bg-transparent bg-customColor text-white rounded-full px-4 py-2 transition-colors duration-300">
        <a href="/donation"> 
          Donate
          </a>
        </button>

        <button className="hover:text-customColor hover:bg-transparent bg-customColor text-white rounded-full px-4 py-2 transition-colors duration-300 ">
          <a href="/SignUp"> 
          Login
          </a>
        </button>

        <Sidebar/>
      </div>
    </div>
  );
}
