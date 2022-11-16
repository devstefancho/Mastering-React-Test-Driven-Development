import React from 'react';
import { CustomerForm } from '../src/CustomerForm';
import { createContainer } from './domManipulators';

const expectToBeInputFieldOfTypeText = (formElement) => {
  expect(formElement).not.toBeNull();
  expect(formElement.type).toEqual('text');
  expect(formElement.tagName).toEqual('INPUT');
};

describe('Customer Form', () => {
  let render, container;
  beforeEach(() => {
    ({ render, container } = createContainer());
  });

  it('renders a form', () => {
    render(<CustomerForm />);
    const field = container.querySelector(
      'form[id="customer"]>[name="firstName"]'
    );
    expectToBeInputFieldOfTypeText(field);
  });
});
