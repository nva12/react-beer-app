import React from 'react';
// Components
import Container from '@material-ui/core/Container';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import ProductsGrid from './ProductsGrid';
// Styles
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  cardContent: {
    padding: theme.spacing(4, 2),
  },
}));

const Favorites = ({ beers, favorites, handleToggleFavorite }) => {
  const favBeers = beers.filter((item) => favorites.includes(item.id));
  const classes = useStyles();

  return (
    <Container fixed>
      <Typography variant="h4" component="h2" gutterBottom>
        Your favorite beers
      </Typography>
      {favBeers.length > 0 ? (
        <ProductsGrid
          beers={favBeers}
          favorites={favorites}
          handleToggleFavorite={handleToggleFavorite}
        />
      ) : (
        <Card>
          <CardContent className={classes.cardContent}>
            <Typography variant="body1" gutterBottom>
              You don't have any favorite beer yet!
            </Typography>
            <Typography variant="body1" gutterBottom>
              Click the star icon on the products page to add or remove a beer
              to your list of favorites.
            </Typography>
          </CardContent>
        </Card>
      )}
    </Container>
  );
};

export default Favorites;
