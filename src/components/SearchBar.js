import React from 'react';

const SearchBar = ({ onSearch }) => {
  const handleSearch = (event) => {
    onSearch(event.target.value);
  };

  return (
    <input type="text" placeholder="Szukaj dania..." onChange={handleSearch} />
  );
};

export default SearchBar;
