import React from "react";

import "./serach-box.style.css";

export const SearchBox = ({ placeholder, handleChanges }) => {
  function onChange (e) {

    console.log(e)
    handleChanges(e.target.value)
  }

  return (
    <input
      className='search'
      type='search'
      placeholder={placeholder}
      onChange={onChange}
    ></input>
  );
};
