import React from 'react';
// Components
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
// Styles
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    margin: theme.spacing(2, 0),
  },
}));

const SearchBar = ({ handleChange, handleChange2 }) => {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardContent>
        <form>
          <Grid container spacing={3}>
            <Grid item xs={12} sm={6} md={4} lg={3}>
              <TextField
                label="Name"
                id="name"
                helperText="Filter by beer name"
                variant="outlined"
                size="small"
                onChange={handleChange}
                InputLabelProps={{ shrink: true }}
              />
            </Grid>
            <Grid item xs={12} sm={6} md={4} lg={3}>
              <TextField
                label="Max ABV (%)"
                id="abv_max"
                helperText="Filter by alcohol content"
                variant="outlined"
                size="small"
                type="number"
                inputProps={{
                  min: 0,
                  max: 100,
                  step: 0.1,
                }}
                onChange={handleChange2}
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
