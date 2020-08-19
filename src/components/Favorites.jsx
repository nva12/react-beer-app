import React from 'react';
// Components
import Container from '@material-ui/core/Container';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import ProductsGrid from './ProductsGrid';

const Favorites = ({ beers, favorites, handleToggleFavorite }) => {
  const favBeers = beers.filter((item) => favorites.includes(item.id));

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
          <CardContent>
            <Typography variant="body1" gutterBottom>
              You don't have any favorite beer yet!
            </Typography>
            <Typography variant="body1" gutterBottom>
              Click the star icon on our products page to add or remove a beer
              to your list of favorites.
            </Typography>
          </CardContent>
        </Card>
      )}
    </Container>
  );
};

export default Favorites;
