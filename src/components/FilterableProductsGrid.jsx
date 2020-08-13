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

  return (
    <Wrapper>
      <SearchBar />
      {error ? (
        <div>Oops, something went wrong...</div>
      ) : !isLoaded ? (
        <div>Loading...</div>
      ) : (
        <ProductsGrid beers={beers} />
      )}
    </Wrapper>
  );
};

export default FilterableProductsGrid;
