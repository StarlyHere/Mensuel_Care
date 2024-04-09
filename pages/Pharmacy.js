// Import necessary libraries
import React from 'react';
import Navbar from '@/components/Navbar';
// Google Maps Component
const MapComponent = () => {
  // Render Google Map component
  return (
    <div>
         <Navbar/>
      <div className="pharmacy-map">
      <iframe src="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d49380.12116555771!2d80.00692042181548!3d12.834873085792024!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1sPharmacies!5e0!3m2!1sen!2sin!4v1712683026121!5m2!1sen!2sin"
          width="1200"
          height="800"
          style={{ border: '5px solid',borderColor:'[#ac1e44]',borderRadius: '10px', margin: 30 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </div>
  );
};

export default MapComponent;
