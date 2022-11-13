import React from 'react';
import { createRoot } from 'react-dom/client';
import { act } from 'react-dom/test-utils';
import Appointment from '../src/Appointment';

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
