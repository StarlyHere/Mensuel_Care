import React from 'react';
import { Typography, List, ListItem, ListItemText } from '@mui/material';

const UpcomingAppointments = ({ appointments }) => {
  return (
    <div className="flex justify-center">
      <div className="bg-white rounded-md shadow-md p-6 w-[70%] mx-auto">
        <Typography variant="h5" className="text-xl font-semibold mb-4">Upcoming Appointments</Typography>
        <List>
          {appointments.map(appointment => (
            <ListItem key={appointment.id} className="bg-gray-50 hover:bg-gray-100 transition-colors duration-300 ease-in-out rounded-md mb-2">
              <ListItemText
                primary={<span className="font-semibold text-lg">{appointment.name}</span>}
                secondary={<span className="text-gray-600 text-base">{`${appointment.date} - ${appointment.time}`}</span>}
              />
            </ListItem>
          ))}
        </List>
      </div>
    </div>
  );
};

export default UpcomingAppointments;
