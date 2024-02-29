// En tu componente React
import React from 'react';
import './App.css';

const RedirectToCatAPIButton = () => {
  const redirectToCatAPI = () => {
    window.location.href = 'https://thecatapi.com/';
  };

  return (
    <div className="button-container">
      <button onClick={redirectToCatAPI}>
        Ir a The Cat API
      </button>
    </div>
  );
};

export default RedirectToCatAPIButton;
