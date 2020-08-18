import React from 'react';
// Components
import Container from '@material-ui/core/Container';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

const About = () => {
  return (
    <Container fixed>
      <Card>
        <CardContent>
          <Typography variant="h4" component="h2" gutterBottom>
            About
          </Typography>
          <Typography variant="body1" gutterBottom>
            This Web App is built with React, using React Hooks.
          </Typography>
        </CardContent>
      </Card>
    </Container>
  );
};

export default About;
