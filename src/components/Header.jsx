import React from 'react';
// Components
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
// Styles
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    marginBottom: theme.spacing(3),
  },
}));

const Header = () => {
  const classes = useStyles();

  return (
    <header className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6">React Beer App</Typography>
        </Toolbar>
      </AppBar>
    </header>
  );
};

export default Header;
