import React from 'react';

const ProductCard = ({ name, tagline, description }) => (
  <article style={{ border: '1px solid black' }}>
    <p>FavouriteIcon</p>
    <p>ProductImage</p>
    <h2>{name}</h2>
    <h3>{tagline}</h3>
    <p>{description}</p>
  </article>
);

export default ProductCard;
