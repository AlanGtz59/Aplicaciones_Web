import './App.css';
// src/App.js
import React from 'react';
import AxolotlList from './AxolotlList.js';
import Header from './header.js';
import Footer from './footer.js';

function App() {
  return (
    <div className="App">
      <div id='content'>
        <div>
          <Header/> {/* Renderiza el componente Header */}
          <AxolotlList limit={50} /> {/*  Renderiza el componente AxolotlList con un limite de 10*/}
          <Footer/> {/*  Renderiza el componente Footer*/}
        </div>
      </div>
    </div>
  );
}

export default App;