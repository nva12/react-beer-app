import React from 'react';
// Components
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import { StarBorder } from '@material-ui/icons';
// Styles

const ProductCard = ({ name, tagline, description, image }) => (
  <Card>
    <CardContent>
      <StarBorder />
      <img src={image} alt={name} style={{ maxHeight: '60px' }} />
      <h2>{name}</h2>
      <h3>{tagline}</h3>
      <p>{description}</p>
    </CardContent>
  </Card>
);

export default ProductCard;
