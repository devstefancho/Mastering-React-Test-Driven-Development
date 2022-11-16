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
  const form = (id) => container.querySelector(`form[id="${id}"]`);
  const firstNameField = () => form('customer').elements.firstName;

  it('renders a form', () => {
    render(<CustomerForm />);
    expectToBeInputFieldOfTypeText(firstNameField());
  });

  it('includes the existing value for the first name', () => {
    render(<CustomerForm firstName={'Stefan'} />);
    expect(firstNameField().value).toEqual('Stefan');
  });
});
