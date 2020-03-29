import React from 'react';
import './App.css';
import Nav from './components/Nav'
import ProductList from './components/productList';


function App() {
  return (
    <div className="App">
      <Nav></Nav>
      <ProductList></ProductList>
    </div>
  );
}

export default App;
