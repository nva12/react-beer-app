import React from 'react';
// Components
import Grid from '@material-ui/core/Grid';
import ProductCard from './ProductCard';
// Styles
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    margin: theme.spacing(2, 0),
  },
}));

const ProductsGrid = ({ beers, favorites, handleToggleFavorite }) => {
  const classes = useStyles();

  return (
    <Grid container spacing={2} className={classes.root}>
      {beers.map(({ id, name, tagline, description, image_url, abv }) => (
        <Grid item key={id} xs={12} sm={6} md={4} lg={3}>
          <ProductCard
            beerId={id}
            name={name}
            tagline={tagline}
            description={description}
            image={image_url}
            abv={abv}
            favorites={favorites}
            handleToggleFavorite={handleToggleFavorite}
          />
        </Grid>
      ))}
    </Grid>
  );
};

export default ProductsGrid;
