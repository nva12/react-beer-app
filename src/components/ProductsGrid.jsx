import React from 'react';
// Components
import ProductCard from './ProductCard';
// Styles
import { Wrapper } from './ProductsGrid.styles';

const ProductsGrid = ({ beers }) => {
  return (
    <Wrapper>
      {beers.map(({ id, name, tagline, description, image_url }) => (
        <ProductCard
          key={id}
          name={name}
          tagline={tagline}
          description={description}
          image={image_url}
        />
      ))}
    </Wrapper>
  );
};

export default ProductsGrid;
