import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
// Components
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
// Styles
import { makeStyles } from '@material-ui/core/styles';
import useMediaQuery from '@material-ui/core/useMediaQuery';

const useStyles = makeStyles((theme) => ({
  root: {
    marginBottom: theme.spacing(3),
    flexGrow: 1,
  },
  title: {
    flexGrow: 1,
  },
  link: {
    textDecoration: 'none',
    color: 'inherit',
    '&:hover': {
      textDecoration: 'none',
    },
  },
}));

const Header = () => {
  const classes = useStyles();
  const matches = useMediaQuery('(min-width:600px');

  return (
    <header className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" className={classes.title}>
            React Beer App
          </Typography>
          {matches ? (
            <nav>
              <Link component={RouterLink} to="/" className={classes.link}>
                <Button color="inherit">Products</Button>
              </Link>
              <Link
                component={RouterLink}
                to="/favorites"
                className={classes.link}
              >
                <Button color="inherit">Favorites</Button>
              </Link>
              <Link component={RouterLink} to="/about" className={classes.link}>
                <Button color="inherit">About</Button>
              </Link>
            </nav>
          ) : (
            <IconButton color="inherit" aria-label="menu">
              <MenuIcon />
            </IconButton>
          )}
        </Toolbar>
      </AppBar>
    </header>
  );
};

export default Header;
