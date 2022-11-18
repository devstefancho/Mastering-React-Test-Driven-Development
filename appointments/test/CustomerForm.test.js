import React from 'react';
import ReactTestUtils, { act } from 'react-dom/test-utils';
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
  const field = (name) => form('customer').elements[name];
  const labelFor = (formElement) =>
    container.querySelector(`label[for=${formElement}]`);

  const itRenderForm = (fieldName) =>
    it('renders a form', () => {
      render(<CustomerForm />);
      expectToBeInputFieldOfTypeText(field(fieldName));
    });

  const itIncludeExistingValue = (fieldName) =>
    it('includes the existing value', () => {
      render(<CustomerForm firstName={fieldName} />);
      expect(field(fieldName).value).toEqual(fieldName);
    });

  const itHasLabel = (fieldName, labelText) =>
    it('renders a label for the first name field', () => {
      render(<CustomerForm />);
      expect(labelFor(fieldName)).not.toBeNull();
      expect(labelFor(fieldName).textContent).toEqual(labelText);
    });

  const itAssignIdMatchToLabel = (fieldName) =>
    it('assigns an id that matches the label id', () => {
      render(<CustomerForm />);
      expect(field(fieldName).id).toEqual(fieldName);
    });

  const itSubmitExistingValue = (fieldName) =>
    it('saves existing field when submitted', async () => {
      expect.hasAssertions(); // 최소한 한번의 assertion(event handler 동작)은 발생해야한다는 것을 보장함

      const existingValue = 'existingValue';
      render(
        <CustomerForm
          {...{ [fieldName]: existingValue }}
          onSubmit={(formValues) => {
            expect(formValues[fieldName]).toEqual(existingValue);
          }}
        />
      );

      act(() => ReactTestUtils.Simulate.submit(form('customer')));
    });

  const itSubmitNewValue = (fieldName, value) =>
    it('saves new value when submitted', async () => {
      expect.hasAssertions(); // 최소한 한번의 assertion(event handler 동작)은 발생해야한다는 것을 보장함

      render(
        <CustomerForm
          {...{ [fieldName]: 'existingValue' }}
          onSubmit={(formValues) => {
            expect(formValues[fieldName]).toEqual(value);
          }}
        />
      );

      const node = field(fieldName);
      node.value = value;

      act(() => ReactTestUtils.Simulate.change(node));
      act(() => ReactTestUtils.Simulate.submit(form('customer')));
    });

  describe('FirstName Field', () => {
    itRenderForm('firstName');
    itIncludeExistingValue('firstName');
    itHasLabel('firstName', 'First Name');
    itAssignIdMatchToLabel('firstName');
    itSubmitExistingValue('firstName');
    itSubmitNewValue('firstName', 'Steven');
  });
});
