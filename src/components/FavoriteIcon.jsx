import React, { useState } from 'react';
// Components
import IconButton from '@material-ui/core/IconButton';
import { StarBorder, Star } from '@material-ui/icons';
// Styles
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(() => ({
  favoriteIcon: {
    position: 'absolute',
    top: '0',
    right: '0',
  },
}));

const FavouriteIcon = () => {
  const [favorite, setFavorite] = useState(false);

  const handleClick = () => setFavorite((s) => !s);

  const classes = useStyles();

  return (
    <IconButton
      color="primary"
      aria-label="favorite"
      component="span"
      onClick={handleClick}
      className={classes.favoriteIcon}
    >
      {favorite ? <Star /> : <StarBorder />}
    </IconButton>
  );
};

export default FavouriteIcon;
