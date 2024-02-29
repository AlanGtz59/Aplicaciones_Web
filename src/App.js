import './App.css';
// src/App.js
import React from 'react';
import AxolotlList from './AxolotlList.js';
import Header from './header.js';
import Footer from './footer.js';
import RedirectToCatAPIButton from './linkapi.js';


function App() {
  return (
    <div className="App">
      <div id='content'>
        <div>
          <Header/>
          <RedirectToCatAPIButton/>
          <AxolotlList limit={50} />
          <Footer/>
        </div>
      </div>
    </div>
  );
}

export default App;