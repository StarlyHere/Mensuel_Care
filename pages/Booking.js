import React, { useState } from 'react';
import AppointmentWidget from '../components/Appointment';
import UpcomingAppointments from '../components/UpcomingAppointment';
import Navbar from '@/components/Navbar';

const Booking = () => {
  const [appointments, setAppointments] = useState([]);

  return (
    <div className="container ">
    <Navbar/>
      <AppointmentWidget setAppointments={setAppointments} />
      <div className='mt-6'>
        <UpcomingAppointments appointments={appointments} />
      </div>
    </div>
  );
};

export default Booking;
