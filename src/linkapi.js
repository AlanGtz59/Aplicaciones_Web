// En tu componente React
import React from 'react';
import './App.css';

const RedirectToCatAPIButton = () => {
  const redirectToCatAPI = () => {
    window.location.href = 'https://thecatapi.com/';
  };

  return (
    <button onClick={redirectToCatAPI}>
      Ir a The Cat API
    </button>
  );
};

export default RedirectToCatAPIButton;
