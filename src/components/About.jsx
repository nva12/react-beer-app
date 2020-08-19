import React from 'react';
// Components
import Container from '@material-ui/core/Container';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

const About = () => {
  return (
    <Container fixed>
      <Typography variant="h4" component="h2" gutterBottom>
        About
      </Typography>
      <Card>
        <CardContent>
          <Typography variant="body1" gutterBottom>
            Hello, my name is Nicolas Vallée, I am a web developer specialized
            in React.
          </Typography>
          <Typography variant="body1" gutterBottom>
            This app is a personal front-end practice project built with
            Create-React-App, and using React Hooks. It relies on the{' '}
            <a href="https://punkapi.com/">PunkAPI</a> to fetch product data
            about beers.
          </Typography>
          <Typography variant="body1" gutterBottom>
            You can filter the list of beers by name and by alcohol content by
            volume (ABV), and add a product to your list of favorites by
            clicking on the star icon.
          </Typography>
          <Typography variant="body1" gutterBottom>
            I used <a href="https://material-ui.com/">Material-UI</a>{' '}
            framework’s components to design the user interface.
          </Typography>
          <Typography variant="body1" gutterBottom>
            You can find the source code in this{' '}
            <a href="https://github.com/nva12/react-beer-app">GitHub repo</a>.
          </Typography>
          <Typography variant="body1" gutterBottom>
            See my other projects and find more information about me{' '}
            <a href="https://www.nicolasvallee.dev/">on my portfolio</a>.
          </Typography>
          <Typography variant="body1" gutterBottom>
            &copy; 2020 Nicolas Vallée
          </Typography>
        </CardContent>
      </Card>
    </Container>
  );
};

export default About;
