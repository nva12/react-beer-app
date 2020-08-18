import React from 'react';
// Components
import Grid from '@material-ui/core/Grid';
import ProductCard from './ProductCard';
// Styles

const ProductsGrid = ({ beers }) => {
  return (
    <Grid container spacing={3}>
      {beers.map(({ id, name, tagline, description, image_url, abv }) => (
        <Grid item xs={12} sm={6} md={4}>
          <ProductCard
            key={id}
            name={name}
            tagline={tagline}
            description={description}
            image={image_url}
            abv={abv}
          />
        </Grid>
      ))}
    </Grid>
  );
};

export default ProductsGrid;
