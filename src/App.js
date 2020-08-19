import React, { useState } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
// Components
import Header from './components/Header';
import FilterableProductsGrid from './components/FilterableProductsGrid';
import About from './components/About';
import Favorites from './components/Favorites';
// Styles
import CssBaseline from '@material-ui/core/CssBaseline';

function App() {
  const [favorites, setFavorites] = useState([]);

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
              handleToggleFavorite={handleToggleFavorite}
            />
          </Route>
          <Route path="/favorites">
            <Favorites favorites={favorites} />
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
