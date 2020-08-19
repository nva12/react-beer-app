import React, { useState } from 'react';
// Components
import IconButton from '@material-ui/core/IconButton';
import Snackbar from '@material-ui/core/Snackbar';
import { StarBorder, Star, Close } from '@material-ui/icons';
// Styles
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(() => ({
  favoriteIcon: {
    position: 'absolute',
    top: '0',
    right: '0',
  },
}));

const FavouriteIcon = ({ beerId, name, favorites, handleToggleFavorite }) => {
  const [open, setOpen] = useState(false);

  const handleClick = () => {
    handleToggleFavorite(beerId);
    setOpen(true);
  };

  const isFavorite = favorites.includes(beerId);

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    setOpen(false);
  };

  const classes = useStyles();

  return (
    <>
      <IconButton
        color="primary"
        component="span"
        onClick={handleClick}
        className={classes.favoriteIcon}
        aria-label="favorite"
      >
        {isFavorite ? <Star /> : <StarBorder />}
      </IconButton>
      <Snackbar
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'left',
        }}
        open={open}
        autoHideDuration={3000}
        onClose={handleClose}
        message={`${name} ${
          isFavorite ? 'added to' : 'removed from'
        } your favorites`}
        action={
          <React.Fragment>
            <IconButton
              size="small"
              aria-label="close"
              color="inherit"
              onClick={handleClose}
            >
              <Close fontSize="small" />
            </IconButton>
          </React.Fragment>
        }
      />
    </>
  );
};

export default FavouriteIcon;
