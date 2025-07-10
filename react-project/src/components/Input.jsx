import React from 'react';

const Input = ({ name, color }) => {
  return (
    <form className="w-10 p-5">
      <div className="mb-5">
        <input
          type="text"
          name="fname"
          placeholder="Enter your firstname"
          className="border border-black rounded-md outline-2 px-4 py-2"
        />
      </div>
      <div className="mb-5">
        <input
          type="text"
          name="lname"
          placeholder="Enter your lastname"
          className="border border-black outline-2 rounded-md px-4 py-2"
        />
      </div>
      {/*No need to give button name because in the props u can give them any name for the dynamic*/}
      {/*Then using props name,color name for label and color for the style*/}
      {/*How can i know that because the color is inside the className style then the name is between the button like normal naming*/}
      <div className="pl-12">
        <button type="submit" className={`${color}`}>
          {name}
        </button>
      </div>
    </form>
  );
};

export default Input;
