import React from 'react';
// Components
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

const Header = () => (
  <header>
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6">React Beer App</Typography>
      </Toolbar>
    </AppBar>
  </header>
);

export default Header;
