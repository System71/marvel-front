import "./searchbar.css";
import { useState } from "react";

const Searchbar = ({ search, setSearch, setCurrentPage, placeholder }) => {
  return (
    <input
      type="text"
      placeholder={placeholder}
      id="searchbar"
      value={search}
      onChange={(event) => {
        setCurrentPage(1);
        setSearch(event.target.value);
      }}
    />
  );
};

export default Searchbar;
