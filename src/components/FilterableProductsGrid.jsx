import React, { useState, useEffect } from 'react';
// Components
import Container from '@material-ui/core/Container';
import SearchBar from './SearchBar';
import ProductsGrid from './ProductsGrid';
// Styles

const FilterableProductsGrid = () => {
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [beers, setBeers] = useState([]);
  const [userFilter, setUserFilter] = useState('');
  const [maxABVFilter, setMaxABVFilter] = useState('');

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

  const handleChange2 = (e) => {
    setMaxABVFilter(e.target.value);
  };

  const filteredBeers = beers.filter(
    (beer) =>
      beer.name.toLowerCase().includes(userFilter.toLowerCase()) &&
      (!maxABVFilter || beer.abv <= maxABVFilter)
  );

  return (
    <Container fixed>
      <SearchBar handleChange={handleChange} handleChange2={handleChange2} />
      {error ? (
        <div>Oops, something went wrong...</div>
      ) : !isLoaded ? (
        <div>Loading...</div>
      ) : filteredBeers.length > 0 ? (
        <ProductsGrid beers={filteredBeers} />
      ) : (
        <div>No result found.</div>
      )}
    </Container>
  );
};

export default FilterableProductsGrid;
