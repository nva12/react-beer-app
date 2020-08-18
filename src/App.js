import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
// Components
import Header from './components/Header';
import FilterableProductsGrid from './components/FilterableProductsGrid';
import About from './components/About';
// Styles
import CssBaseline from '@material-ui/core/CssBaseline';

function App() {
  return (
    <Router>
      <CssBaseline />
      <div className="App">
        <Header />
        <Switch>
          <Route exact path="/">
            <FilterableProductsGrid />
          </Route>
          <Route path="/favorites">
            <div>Favorites</div>
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
