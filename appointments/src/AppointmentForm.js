import React from 'react';

const defaultServices = [
  'Cut',
  'Blow-dry',
  'Cut & color',
  'Beard trim',
  'Cut & beard trim',
  'Extensions',
];

const AppointmentForm = ({ services = defaultServices }) => {
  return (
    <form id="appointment">
      <select name="service" value={services[0]} readOnly>
        {services.map((s) => (
          <option key={s}>{s}</option>
        ))}
      </select>
    </form>
  );
};

export default AppointmentForm;
