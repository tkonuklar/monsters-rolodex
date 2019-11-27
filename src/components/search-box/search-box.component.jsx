import React from "react";

import "./serach-box.style.css";

export const SearchBox = ({ placeholder, handleChanges }) => {
  return (
    <input
      className='search'
      type='search'
      placeholder={placeholder}
      onChange={handleChanges}
    ></input>
  );
};
