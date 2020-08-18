import React, { useState } from 'react';
// Components
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import FavoriteIcon from './FavoriteIcon';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import { KeyboardArrowUp, KeyboardArrowDown } from '@material-ui/icons';
// Styles
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  headRow: {
    position: 'relative',
    textAlign: 'center',
    marginBottom: theme.spacing(2),
  },
  productImage: {
    height: '10rem',
  },
  centered: {
    textAlign: 'center',
  },
  clickable: {
    cursor: 'pointer',
  },
}));

const ProductCard = ({ name, tagline, description, image, abv }) => {
  const [fullText, setFullText] = useState(false);

  const handleClick = () => setFullText((s) => !s);

  const classes = useStyles();

  const excerpt = (input, length) =>
    input.length > length ? `${input.substring(0, length)}...` : input;

  return (
    <Card>
      <CardContent>
        <div className={classes.headRow}>
          <img src={image} alt={name} className={classes.productImage} />
          <FavoriteIcon />
        </div>
        <Typography variant="h5" component="h2" gutterBottom>
          {name}
        </Typography>
        <Typography variant="caption" gutterBottom>
          ABV: {abv}%
        </Typography>
        <Typography variant="subtitle2" gutterBottom>
          {tagline}
        </Typography>
        {fullText ? (
          <Typography variant="body2" gutterBottom>
            <>
              {description}
              <div className={classes.centered}>
                <IconButton
                  color="primary"
                  aria-label="minimize text"
                  component="span"
                  onClick={handleClick}
                  className={classes.clickable}
                >
                  <KeyboardArrowUp fontSize="small" />
                </IconButton>
              </div>
            </>
          </Typography>
        ) : (
          <Typography variant="body2" gutterBottom>
            {description.length > 120 ? (
              <>
                {excerpt(description, 120)}
                <div className={classes.centered}>
                  <IconButton
                    color="primary"
                    aria-label="expand text"
                    component="span"
                    onClick={handleClick}
                    className={classes.clickable}
                  >
                    <KeyboardArrowDown fontSize="small" />
                  </IconButton>
                </div>
              </>
            ) : (
              description
            )}
          </Typography>
        )}
      </CardContent>
    </Card>
  );
};

export default ProductCard;
