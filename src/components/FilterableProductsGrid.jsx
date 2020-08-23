import React, { useState } from 'react';
// Components
import Container from '@material-ui/core/Container';
import SearchBar from './SearchBar';
import Typography from '@material-ui/core/Typography';
import ProductsGrid from './ProductsGrid';

const FilterableProductsGrid = ({
  error,
  isLoaded,
  beers,
  favorites,
  handleToggleFavorite,
}) => {
  const [nameFilter, setNameFilter] = useState('');
  const [maxABVFilter, setMaxABVFilter] = useState('');

  const handleNameChange = (e) => {
    setNameFilter(e.target.value);
  };

  const handleABVChange = (e) => {
    setMaxABVFilter(e.target.value);
  };

  const filteredBeers = beers.filter(
    (beer) =>
      beer.name.toLowerCase().includes(nameFilter.toLowerCase()) &&
      (!maxABVFilter || beer.abv <= maxABVFilter)
  );

  return (
    <Container fixed>
      <Typography variant="h4" component="h2" gutterBottom>
        Search
      </Typography>
      <SearchBar
        handleNameChange={handleNameChange}
        handleABVChange={handleABVChange}
      />
      <Typography variant="h4" component="h2" gutterBottom>
        Products
      </Typography>
      {error ? (
        <div>Oops, something went wrong...</div>
      ) : !isLoaded ? (
        <div>Loading...</div>
      ) : filteredBeers.length > 0 ? (
        <ProductsGrid
          beers={filteredBeers}
          favorites={favorites}
          handleToggleFavorite={handleToggleFavorite}
        />
      ) : (
        <div>No result found.</div>
      )}
    </Container>
  );
};

export default FilterableProductsGrid;
