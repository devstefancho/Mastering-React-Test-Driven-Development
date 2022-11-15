import React, { useState } from 'react';

export const Appointment = ({ customer }) => {
  return <div>{customer.firstName}</div>;
};

const appointmentTimeOfDay = (startedAt) => {
  const [h, m] = new Date(startedAt).toTimeString().split(':');
  return `${h}:${m}`;
};

export const AppointmentsDayView = ({ appointments }) => {
  const [selectedAppointment, setSelectedAppointment] = useState(0);
  return (
    <div id="appointmentsDayView">
      <ol>
        {appointments.map((a, i) => (
          <li key={a.startedAt}>
            <button type="button" onClick={() => setSelectedAppointment(i)}>
              {appointmentTimeOfDay(a.startedAt)}
            </button>
          </li>
        ))}
      </ol>
      {appointments.length === 0 ? (
        <p>There are not appointments scheduled for today</p>
      ) : (
        <Appointment customer={appointments[selectedAppointment].customer} />
      )}
    </div>
  );
};
