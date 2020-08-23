import React, { useState } from 'react';
import { Link as RouterLink } from 'react-router-dom';
// Components
import AppBar from '@material-ui/core/AppBar';
import Container from '@material-ui/core/Container';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
// Styles
import { makeStyles } from '@material-ui/core/styles';
import useMediaQuery from '@material-ui/core/useMediaQuery';

const useStyles = makeStyles((theme) => ({
  root: {
    marginBottom: theme.spacing(3),
    flexGrow: 1,
  },
  noPadding: {
    padding: 0,
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
  button: {
    color: 'inherit',
    '&:hover': {
      backgroundColor: theme.palette.info.main,
    },
  },
}));

const Header = () => {
  const classes = useStyles();
  const matches = useMediaQuery('(min-width:600px');

  const [anchorEl, setAnchorEl] = useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <header className={classes.root}>
      <AppBar position="static">
        <Container fixed className={classes.noPadding}>
          <Toolbar>
            <Typography variant="h6" className={classes.title}>
              React Beer App
            </Typography>
            {matches ? (
              <nav>
                <Link component={RouterLink} to="/" className={classes.link}>
                  <Button className={classes.button}>Products</Button>
                </Link>
                <Link
                  component={RouterLink}
                  to="/favorites"
                  className={classes.link}
                >
                  <Button className={classes.button}>Favorites</Button>
                </Link>
                <Link
                  component={RouterLink}
                  to="/about"
                  className={classes.link}
                >
                  <Button className={classes.button}>About</Button>
                </Link>
              </nav>
            ) : (
              <>
                <IconButton
                  color="inherit"
                  aria-controls="mobile-menu"
                  aria-haspopup="true"
                  onClick={handleClick}
                >
                  <MenuIcon />
                </IconButton>
                <Menu
                  id="mobile-menu"
                  anchorEl={anchorEl}
                  keepMounted
                  open={Boolean(anchorEl)}
                  onClose={handleClose}
                >
                  <MenuItem onClick={handleClose}>
                    <Link
                      component={RouterLink}
                      to="/"
                      className={classes.link}
                    >
                      Products
                    </Link>
                  </MenuItem>
                  <MenuItem onClick={handleClose}>
                    <Link
                      component={RouterLink}
                      to="/favorites"
                      className={classes.link}
                    >
                      Favorites
                    </Link>
                  </MenuItem>
                  <MenuItem onClick={handleClose}>
                    <Link
                      component={RouterLink}
                      to="/about"
                      className={classes.link}
                    >
                      About
                    </Link>
                  </MenuItem>
                </Menu>
              </>
            )}
          </Toolbar>
        </Container>
      </AppBar>
    </header>
  );
};

export default Header;
