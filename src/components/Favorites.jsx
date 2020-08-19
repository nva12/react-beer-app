import React from 'react';
// Components
import Container from '@material-ui/core/Container';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

const Favorites = ({ favorites }) => {
  return (
    <Container fixed>
      <Card>
        <CardContent>
          <Typography variant="h4" component="h2" gutterBottom>
            Favorites
          </Typography>
          <Typography variant="body1" gutterBottom>
            Your favorite beers are:
          </Typography>
          <ul>
            {favorites.map((item) => (
              <li key={item}>id: {item}</li>
            ))}
          </ul>
        </CardContent>
      </Card>
    </Container>
  );
};

export default Favorites;
