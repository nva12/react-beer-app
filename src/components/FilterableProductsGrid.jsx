import React from 'react';
// Components
import SearchBar from './SearchBar';
import ProductsGrid from './ProductsGrid';

const FilterableProductsGrid = () => (
  <main>
    <SearchBar />
    <ProductsGrid />
  </main>
);

export default FilterableProductsGrid;
