import React from 'react';
// Styles
import { Wrapper } from './ProductCard.styles';

const ProductCard = ({ name, tagline, description, image }) => (
  <Wrapper>
    <p>FavouriteIcon</p>
    <img src={image} alt={name} style={{ maxHeight: '60px' }} />
    <h2>{name}</h2>
    <h3>{tagline}</h3>
    <p>{description}</p>
  </Wrapper>
);

export default ProductCard;
