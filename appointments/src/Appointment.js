import React from 'react';

export const Appointment = ({ customer }) => {
  return <div>{customer.firstName}</div>;
};

const appointmentTimeOfDay = (startedAt) => {
  const [h, m] = new Date(startedAt).toTimeString().split(':');
  return `${h}:${m}`;
};

export const AppointmentsDayView = ({ appointments }) => (
  <div id="appointmentsDayView">
    <ol>
      {appointments.map((a) => (
        <li key={a.startedAt}>{appointmentTimeOfDay(a.startedAt)}</li>
      ))}
    </ol>
    {appointments.length === 0 ? (
      <p>There are not appointments scheduled for today</p>
    ) : (
      <Appointment customer={appointments[0].customer} />
    )}
  </div>
);
