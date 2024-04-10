import React, { useState } from 'react';
import { Formik, Form, Field } from 'formik';
import { TextField, Button, Typography, Grid, Container, Paper } from '@mui/material';

const AppointmentWidget = ({ setAppointments }) => {
  const [showMessage, setShowMessage] = useState(false); // State variable to control message visibility

  // Get the current date in the format "YYYY-MM-DD"
  const currentDate = new Date().toISOString().split('T')[0];

  const handleSubmit = (values, { resetForm }) => {
    const newAppointment = { id: Date.now(), ...values };
    setAppointments(prevAppointments => [...prevAppointments, newAppointment]);
    resetForm();
    setShowMessage(true); // Display message after booking appointment
  };

  return (
    <Container maxWidth="xs" className="mt-8">
      <Paper elevation={3} className="p-4" style={{ height: '400px' }}>
        <Typography variant="h5" gutterBottom align="center" className='font-bold text-2xl text-[#ac1e44]'>Book an Appointment</Typography>
        <Formik initialValues={{ name: '', date: '', time: '' }} onSubmit={handleSubmit}>
          <Form>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <Field name="name">
                  {({ field }) => (
                    <TextField {...field} variant="outlined" fullWidth required style={{ height: '100px' }} />
                  )}
                </Field>
              </Grid>
              <Grid item xs={6}>
                <Field name="date">
                  {({ field }) => (
                    <TextField {...field} type="date" variant="outlined" fullWidth required inputProps={{ min: currentDate }} />
                  )}
                </Field>
              </Grid>
              <Grid item xs={6}>
                <Field name="time">
                  {({ field }) => (
                    <TextField {...field} type="time" variant="outlined" fullWidth required />
                  )}
                </Field>
              </Grid>
            </Grid>
            <Button type="submit" variant="contained" fullWidth className="mt-10 bg-pink-500 text-base font-semibold hover:bg-pink-600">Book Appointment</Button>
          </Form>
        </Formik>
        {showMessage && (
          <Typography variant="body1" className="text-green-500 mt-4 text-center">Check your email for further updates.</Typography>
        )}
      </Paper>
    </Container>
  );
};

export default AppointmentWidget;
