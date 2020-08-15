import React from 'react';

const SearchBar = ({ handleChange }) => {
  return (
    <form>
      <input
        type="text"
        id="search"
        name="search"
        placeholder="Search for beer..."
        onChange={handleChange}
      />
    </form>
  );
};

export default SearchBar;
