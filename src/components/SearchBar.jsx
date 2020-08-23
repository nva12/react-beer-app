import React from 'react';
// Components
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
// Styles
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    margin: theme.spacing(2, 0, 3, 0),
  },
  intro: {
    marginBottom: theme.spacing(3),
  },
}));

const SearchBar = ({ handleNameChange, handleABVChange }) => {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardContent>
        <Typography variant="body1" className={classes.intro}>
          Filter the list of products by beer name and by maximum alcohol
          content:
        </Typography>
        <form>
          <Grid container spacing={3}>
            <Grid item xs={12} sm={6} md={4} lg={3}>
              <TextField
                label="Name"
                id="name"
                variant="outlined"
                size="small"
                onChange={handleNameChange}
                InputLabelProps={{ shrink: true }}
              />
            </Grid>
            <Grid item xs={12} sm={6} md={4} lg={3}>
              <TextField
                label="Max ABV (%)"
                id="abv_max"
                variant="outlined"
                size="small"
                type="number"
                inputProps={{
                  min: 0,
                  max: 100,
                  step: 0.1,
                }}
                onChange={handleABVChange}
                InputLabelProps={{ shrink: true }}
              />
            </Grid>
          </Grid>
        </form>
      </CardContent>
    </Card>
  );
};

export default SearchBar;
