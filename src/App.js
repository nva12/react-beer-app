import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
// Components
import Header from './components/Header';
import FilterableProductsGrid from './components/FilterableProductsGrid';
import About from './components/About';
import Favorites from './components/Favorites';
// Styles
import CssBaseline from '@material-ui/core/CssBaseline';

function App() {
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [beers, setBeers] = useState([]);
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    fetch('https://api.punkapi.com/v2/beers?page=1&per_page=9')
      .then((res) => res.json())
      .then(
        (result) => {
          setIsLoaded(true);
          setBeers(result);
        },
        (error) => {
          setIsLoaded(true);
          setError(error);
        }
      );
  }, []);

  const handleToggleFavorite = (id) => {
    if (favorites.includes(id)) {
      const newFavorites = favorites.filter((item) => item !== id);
      setFavorites(newFavorites);
    } else {
      const newFavorites = [...favorites, id];
      setFavorites(newFavorites);
    }
  };

  return (
    <Router>
      <CssBaseline />
      <div className="App">
        <Header />
        <Switch>
          <Route exact path="/">
            <FilterableProductsGrid
              error={error}
              isLoaded={isLoaded}
              beers={beers}
              favorites={favorites}
              handleToggleFavorite={handleToggleFavorite}
            />
          </Route>
          <Route path="/favorites">
            <Favorites
              beers={beers}
              favorites={favorites}
              handleToggleFavorite={handleToggleFavorite}
            />
          </Route>
          <Route path="/about">
            <About />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
