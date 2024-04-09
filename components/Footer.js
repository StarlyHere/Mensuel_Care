import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-[#ac1e44] text-gray-300 py-6">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center">
          <p>&copy; 2024 Your Website. All rights reserved.</p>
          <div>
            <a href="#" className="mr-4 hover:text-white">Terms of Service</a>
            <a href="#" className="mr-4 hover:text-white">Privacy Policy</a>
            <a href="#" className="hover:text-white">Contact Us</a>
          </div>
        </div>
        <div className="mt-4 text-center">
          <p>Designed and Developed with <span className="text-red-500">&hearts;</span> by Team SIR3NS</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;


