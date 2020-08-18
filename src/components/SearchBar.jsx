import React from 'react';
// Components
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
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
          <TextField
            label="Name"
            id="name"
            helperText="Search by beer name"
            size="small"
            onChange={handleChange}
            InputLabelProps={{ shrink: true }}
          />
          <TextField
            label="Max"
            id="abv_max"
            helperText="Search by alcool content"
            size="small"
            type="number"
            inputProps={{
              min: 0,
              max: 20,
              step: 0.1,
            }}
            onChange={handleChange2}
            InputLabelProps={{ shrink: true }}
          />
        </form>
      </CardContent>
    </Card>
  );
};

export default SearchBar;
