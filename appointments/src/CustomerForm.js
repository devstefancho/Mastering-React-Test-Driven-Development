import React from 'react';

export const CustomerForm = ({ firstName }) => {
  return (
    <form id="customer">
      <label htmlFor="firstName">First Name</label>
      <input
        type="text"
        name="firstName"
        value={firstName}
        id="firstName"
        readOnly
      />
    </form>
  );
};
