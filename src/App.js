import React from 'react';
// Components
import Header from './components/Header';
import FilterableProductsGrid from './components/FilterableProductsGrid';
// Styles
import CssBaseline from '@material-ui/core/CssBaseline';

function App() {
  return (
    <>
      <CssBaseline />
      <div className="App">
        <Header />
        <FilterableProductsGrid />
      </div>
    </>
  );
}

export default App;
