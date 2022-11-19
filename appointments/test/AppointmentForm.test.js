import React from 'react';
import AppointmentForm from '../src/AppointmentForm';
import { createContainer } from './domManipulators';

describe('Appointment Form', () => {
  let render, container;
  const form = () => container.querySelector('form[id="appointment"]');
  const field = (fieldName) =>
    container.querySelector('form[id="appointment"]').elements[fieldName];

  beforeEach(() => {
    ({ render, container } = createContainer());
  });

  it('render the form', () => {
    render(<AppointmentForm />);
    expect(form()).not.toBeNull();
  });

  it('renders as a select bos', () => {
    render(<AppointmentForm />);
    expect(field('service')).not.toBeNull();
    expect(field('service').tagName).toEqual('SELECT');
  });

  it('render the first option', () => {
    const services = ['Cut', 'Blow-dry'];
    render(<AppointmentForm services={services} />);
    expect(field('service').value).toEqual('Cut');
  });
});
