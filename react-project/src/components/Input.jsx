import React from 'react';
//component for Input
const Input = () => {
  return (
    <>
      <div className="mb-5">
        <input
          type="text"
          placeholder="Enter Your Firstname"
          name="firstname"
          required
          className="border border-black outline-2 px-4 py-2 rounded-md"
        />
      </div>
      <div className="mb-5">
        <input
          type="text"
          placeholder="Enter Your Lastname"
          name="lastname"
          required
          className="border border-black outline-2 px-4 py-2 rounded-md"
        />
      </div>
    </>
  );
};

export default Input;
