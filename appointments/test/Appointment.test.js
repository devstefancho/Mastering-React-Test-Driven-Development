import React from 'react';
import { createRoot } from 'react-dom/client';
import { act } from 'react-dom/test-utils';
import Appointment from '../src/Appointment';

describe('Appointment', () => {
  it('renders the customer name', () => {
    const customer = { firstName: 'Ashley' };
    const component = <Appointment customer={customer} />;
    const container = document.createElement('div');
    document.body.appendChild(container);
    const root = createRoot(container);
    act(() => root.render(component));
    expect(document.body.textContent).toMatch('Ashley');
  });
});
