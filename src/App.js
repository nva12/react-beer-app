import React from 'react';
// Components
import Header from './components/Header';
import FilterableProductsGrid from './components/FilterableProductsGrid';
// Styles
import { GlobalStyle } from './App.styles';

function App() {
  return (
    <>
      <GlobalStyle />
      <div className="App">
        <Header />
        <FilterableProductsGrid />
      </div>
    </>
  );
}

export default App;
