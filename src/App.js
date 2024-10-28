
import React from 'react';
import './App.css';
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';


function App() {
  return (
    <div className="App">
      <NavBar />
      <ItemListContainer message="¡Bienvenido a Seven E-Commerce!" />
    </div>
  );
}

export default App;
