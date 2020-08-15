import React, { useState, useEffect } from 'react';
// Components
import SearchBar from './SearchBar';
import ProductsGrid from './ProductsGrid';
// Styles
import { Wrapper } from './FilterableProductsGrid.styles';

const FilterableProductsGrid = () => {
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [beers, setBeers] = useState([]);
  const [userFilter, setUserFilter] = useState('');

  useEffect(() => {
    fetch('https://api.punkapi.com/v2/beers?page=1&per_page=9')
      .then((res) => res.json())
      .then(
        (result) => {
          setIsLoaded(true);
          setBeers(result);
        },
        (error) => {
          setIsLoaded(true);
          setError(error);
        }
      );
  }, []);

  const handleChange = (e) => {
    setUserFilter(e.target.value);
  };

  const filteredBeers = beers.filter((beer) =>
    beer.name.toLowerCase().includes(userFilter.toLowerCase())
  );

  return (
    <Wrapper>
      <SearchBar handleChange={handleChange} />
      {error ? (
        <div>Oops, something went wrong...</div>
      ) : !isLoaded ? (
        <div>Loading...</div>
      ) : filteredBeers.length > 0 ? (
        <ProductsGrid beers={filteredBeers} />
      ) : (
        <div>No result found.</div>
      )}
    </Wrapper>
  );
};

export default FilterableProductsGrid;
