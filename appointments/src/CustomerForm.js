import React, { useState } from 'react';

export const CustomerForm = ({
  firstName,
  lastName,
  phoneNumber,
  onSubmit,
}) => {
  const [customer, setCustomer] = useState({
    firstName,
    lastName,
    phoneNumber,
  });
  const changeHandler = (e) => {
    setCustomer((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
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
      <label htmlFor="lastName">Last Name</label>
      <input
        type="text"
        name="lastName"
        value={lastName}
        id="lastName"
        onChange={changeHandler}
      />
      <label htmlFor="phoneNumber">Phone Number</label>
      <input
        type="text"
        name="phoneNumber"
        value={phoneNumber}
        id="phoneNumber"
        onChange={changeHandler}
      />
      <button type="submit">Add</button>
    </form>
  );
};
