import React from "react";

const SearchBar = ({ onSearch }) => {
  return (
    <div className="mb-8 text-center">
      <input
        type="text"
        placeholder="Zoek projecten…"
        onChange={(e) => onSearch(e.target.value)}
        className="w-full md:w-1/2 p-3 rounded-md text-black"
      />
    </div>
  );
};

export default SearchBar;
