import React from 'react';
import { createRoot } from 'react-dom/client';
import ReactTestUtils, { act } from 'react-dom/test-utils';
import { Appointment, AppointmentsDayView } from '../src/Appointment';

describe('Appointment', () => {
  let customer;
  let container;

  beforeEach(() => {
    container = document.createElement('div');
  });

  const renderComponent = (component) => {
    const root = createRoot(container);
    act(() => root.render(component));
  };

  it('renders the customer name', () => {
    customer = { firstName: 'Ashley' };
    renderComponent(<Appointment customer={customer} />);
    expect(container.textContent).toMatch('Ashley');
  });

  it('renders another customer name', () => {
    customer = { firstName: 'Tomas' };
    renderComponent(<Appointment customer={customer} />);
    expect(container.textContent).toMatch('Tomas');
  });
});

describe('AppointmentsDayView', () => {
  let container;

  beforeEach(() => {
    container = document.createElement('div');
  });

  const renderComponent = (component) => {
    const root = createRoot(container);
    act(() => root.render(component));
  };

  it('renders a div with the right id', () => {
    renderComponent(<AppointmentsDayView appointments={[]} />);
    expect(container.querySelector('div#appointmentsDayView')).not.toBeNull();
  });

  const today = new Date();
  const appointments = [
    { startedAt: today.setHours(12, 0), customer: { firstName: 'Stefan' } },
    { startedAt: today.setHours(13, 0), customer: { firstName: 'Steven' } },
  ];

  it('render multiple appointments in an ol element', () => {
    renderComponent(<AppointmentsDayView appointments={appointments} />);
    expect(container.querySelector('ol')).not.toBeNull();
    expect(container.querySelector('ol').children).toHaveLength(2);
  });

  it('render each appointment in an li', () => {
    renderComponent(<AppointmentsDayView appointments={appointments} />);
    expect(container.querySelector('ol')).not.toBeNull();
    expect(container.querySelectorAll('li')[0].textContent).toBe('12:00');
    expect(container.querySelectorAll('li')[1].textContent).toBe('13:00');
  });

  it('initially shows a message saying there are no appointments today', () => {
    renderComponent(<AppointmentsDayView appointments={[]} />);
    expect(container.textContent).toMatch(
      'There are not appointments scheduled for today'
    );
  });

  it('selects the first appointment by default', () => {
    renderComponent(<AppointmentsDayView appointments={appointments} />);
    expect(container.textContent).toMatch('Stefan');
  });

  it('render each button of appointment', () => {
    renderComponent(<AppointmentsDayView appointments={appointments} />);
    expect(container.querySelector('button').type).toEqual('button');
  });

  it('render a selected appointment', () => {
    renderComponent(<AppointmentsDayView appointments={appointments} />);
    const button = container.querySelectorAll('button')[1];
    act(() => ReactTestUtils.Simulate.click(button));
    expect(container.textContent).toMatch('Steven');
  });
});
