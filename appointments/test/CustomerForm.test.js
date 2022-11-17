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
  const firstNameField = () => form('customer').elements.firstName;
  const labelFor = (formElement) =>
    container.querySelector(`label[for=${formElement}]`);

  it('renders a form', () => {
    render(<CustomerForm />);
    expectToBeInputFieldOfTypeText(firstNameField());
  });

  it('includes the existing value for the first name', () => {
    render(<CustomerForm firstName={'Stefan'} />);
    expect(firstNameField().value).toEqual('Stefan');
  });

  it('renders a label for the first name field', () => {
    render(<CustomerForm firstName={'Stefan'} />);
    expect(labelFor('firstName')).not.toBeNull();
    expect(labelFor('firstName').textContent).toEqual('First Name');
  });

  it('assigns an id that matches the label id to the first name field', () => {
    render(<CustomerForm />);
    expect(firstNameField().id).toEqual('firstName');
  });

  it('saves existing first name when submitted', async () => {
    expect.hasAssertions(); // 최소한 한번의 assertion(event handler 동작)은 발생해야한다는 것을 보장함

    render(
      <CustomerForm
        firstName={'Stefan'}
        onSubmit={({ firstName }) => {
          expect(firstName).toEqual('Steven');
        }}
      />
    );

    const node = firstNameField();
    node.value = 'Steven';

    act(() => ReactTestUtils.Simulate.change(node));
    act(() => ReactTestUtils.Simulate.submit(form('customer')));
  });
});
