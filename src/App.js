import './App.css';
// src/App.js
import React from 'react';
import AxolotlList from './AxolotlList.js';
import Header from './Header.js';


function App() {
  return (
    <div className="App">
      <Header/>
      <AxolotlList/>
    </div>
  );
}

export default App;
