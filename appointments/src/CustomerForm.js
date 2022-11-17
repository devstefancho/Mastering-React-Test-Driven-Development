import React, { useState } from 'react';

export const CustomerForm = ({ firstName, onSubmit }) => {
  const [customer, setCustomer] = useState({ firstName });
  const changeHandler = (e) => {
    setCustomer((prev) => ({
      ...prev,
      firstName: e.target.value,
    }));
  };

  return (
    <form
      id="customer"
      onSubmit={() => {
        onSubmit(customer);
      }}
    >
      <label htmlFor="firstName">First Name</label>
      <input
        type="text"
        name="firstName"
        value={firstName}
        id="firstName"
        onChange={changeHandler}
      />
    </form>
  );
};
