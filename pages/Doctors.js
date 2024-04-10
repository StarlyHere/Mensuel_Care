import React from 'react';
import Navbar from '@/components/Navbar';

const DoctorAppointmentCard = ({ doctorName, rating, location, bookingUrl, imgSrc }) => {
  return (
    <div className="bg-[#ac1e44] text-white rounded-md shadow-md p-6 mb-4">
      <div className="flex items-center mb-4">
        <div className="w-16 h-16 mr-4 rounded-full bg-white">
          {imgSrc && <img src={imgSrc} alt={doctorName} className="w-full h-full object-cover rounded-full" />}
        </div>
        <div>
          <h2 className="text-lg font-semibold">{doctorName}</h2>
          <div className="flex items-center mt-1">
            <span className="text-white mr-2">{rating}</span>
            
          </div>
        </div>
      </div>
      <p className="text-sm text-white mb-4 flex items-center">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-2" viewBox="0 0 20 20" fill="currentColor">
          <path fillRule="evenodd" d="M10 0a7.5 7.5 0 015.3 12.9L10 20l-5.3-7.1A7.5 7.5 0 0110 0zm0 10a2.5 2.5 0 100-5 2.5 2.5 0 000 5z" clipRule="evenodd" />
        </svg>
        {location}
      </p>
      <a href="../Booking" target="_blank" rel="noopener noreferrer" className="bg-pink-500 hover:bg-pink-600 text-white font-bold py-2 px-4 rounded-md w-full focus:outline-none focus:ring focus:ring-indigo-200 inline-block text-center">Book Appointment</a>
    </div>
  );
};

const DoctorAppointmentStack = () => {
  return (
    <div>
    <Navbar/>
    <div className='flex justify-center'>
    <p className='text-4xl font-bold mt-10'>ONLINE GYNECOLOGIST CONSULTATION</p>
    </div>
    <div className="w-70 mx-auto p-20">
      <div className="mb-4">
        <DoctorAppointmentCard
          doctorName="Dr. Anita Chaudhary"
          rating="⭐⭐⭐⭐⭐"
          location="Chennai,India"
          bookingUrl="https://example.com/book-appointment"
          imgSrc="a1.png" 
        />
      </div>
      <div className="mb-4">
        <DoctorAppointmentCard
          doctorName="Dr. Anushka verma"
          rating="⭐⭐⭐⭐⭐"
          location="Chennai,India"
          bookingUrl="https://example.com/book-appointment"
          imgSrc="a2.png" 
        />
      </div>
      <div className="mb-4">
        <DoctorAppointmentCard
          doctorName="Chennai,India"
          rating="⭐⭐⭐⭐⭐"
          location="789 Oak St, Village, State"
          bookingUrl="https://example.com/book-appointment"
          imgSrc="a3.png" 
        />
      </div>
      <div className="mb-4">
        <DoctorAppointmentCard
          doctorName="Dr. Ritu Gupta"
          rating="⭐⭐⭐⭐⭐"
          location="Chennai,India"
          bookingUrl="https://example.com/book-appointment"
          imgSrc="a4.png" 
        />
      </div>
    </div>
    </div>
  );
};

export default DoctorAppointmentStack;
