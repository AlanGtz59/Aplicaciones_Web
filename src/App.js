import './App.css';
// src/App.js
import React from 'react';
import AxolotlList from './AxolotlList.js';
import Header from './header.js';


function App() {
  return (
    <div className="App">
      <div class="row area-contenido">
        <div class="col-md-8 col-xs-2 col-lg-8 col-sm-8">
          <Header/>
          <AxolotlList/>
        </div>
      </div>
    </div>
  );
}

export default App;