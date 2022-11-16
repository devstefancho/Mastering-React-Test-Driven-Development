import React, { useState } from 'react';

const appointmentTimeOfDay = (startsAt) => {
  const [h, m] = new Date(startsAt).toTimeString().split(':');
  return `${h}:${m}`;
};

export const Appointment = ({
  appointment: { customer, startsAt, stylist, service, notes },
}) => {
  return (
    <div>
      <h1>Today's appointment at {appointmentTimeOfDay(startsAt)}</h1>
      <table>
        <tr>
          <td>Customer</td>
          <td>{customer.firstName}</td>
        </tr>
        <tr>
          <td>Phone number</td>
          <td>{customer.phoneNumber}</td>
        </tr>
        <tr>
          <td>Stylist</td>
          <td>{stylist}</td>
        </tr>
        <tr>
          <td>Service</td>
          <td>{service}</td>
        </tr>
        <tr>
          <td>Notes</td>
          <td>{notes}</td>
        </tr>
      </table>
    </div>
  );
};

export const AppointmentsDayView = ({ appointments }) => {
  const [selectedAppointment, setSelectedAppointment] = useState(0);
  return (
    <div id="appointmentsDayView">
      <ol>
        {appointments.map((a, i) => (
          <li key={a.startsAt}>
            <button type="button" onClick={() => setSelectedAppointment(i)}>
              {appointmentTimeOfDay(a.startsAt)}
            </button>
          </li>
        ))}
      </ol>
      {appointments.length === 0 ? (
        <p>There are not appointments scheduled for today</p>
      ) : (
        <Appointment appointment={appointments[selectedAppointment]} />
      )}
    </div>
  );
};
