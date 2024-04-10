import React from 'react';
import Navbar from '@/components/navbar';

// Google Maps Component
const GoogleMapComponent = () => {
  // Render Google Map component
  return (
    <div>
      <Navbar/>
      <div className="contact-map">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d124464.97189699224!2d80.02066015507641!3d12.873580897662524!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1shospital!5e0!3m2!1sen!2sin!4v1712681751788!5m2!1sen!2sin"
          width="1200"
          height="800"
          style={{ border: '5px solid', borderColor:'[#ac1e44]',borderRadius: '10px', margin: 30 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </div>
  );
};

export default GoogleMapComponent;
