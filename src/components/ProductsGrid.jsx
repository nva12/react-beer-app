import React from 'react';
// Components
import ProductCard from './ProductCard';

const ProductsGrid = ({ beers }) => {
  return (
    <div>
      {beers.map(({ id, name, tagline, description }) => (
        <ProductCard
          key={id}
          name={name}
          tagline={tagline}
          description={description}
        />
      ))}
    </div>
  );
};

export default ProductsGrid;
