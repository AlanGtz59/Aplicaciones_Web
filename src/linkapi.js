import React from 'react';//El código importa el módulo React y el archivo de estilos App.css.
import './App.css';

const RedirectToCatAPIButton = () => {//El componente RedirectToCatAPIButton se define como un componente funcional.
  const redirectToCatAPI = () => {//Contiene una función llamada redirectToCatAPI, que se ejecuta cuando se hace clic en el botón.
    window.location.href = 'https://thecatapi.com/';//redirige al usuario a la URL 'https://thecatapi.com/' utilizando window.location.href.
  };

  return (
    //El componente renderiza un contenedor <div> con la clase button-container.
    <div className="button-container">
      <button onClick={redirectToCatAPI}>
        Ir a The Cat API 😺
      </button>
    </div>//Cuando se hace clic en el botón, se activa la función redirectToCatAPI, llevando al usuario al sitio web de The Cat API.
  );
};

export default RedirectToCatAPIButton;
