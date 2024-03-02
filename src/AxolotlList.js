// src/components/AxolotlList.js
//Dato curioso... al principio iba a hacer la api de ajolotes, pero ya no existia esa API asi que pase a gatos y lo adapte, ups.
import React, { useState, useEffect } from 'react';//React y useState de la biblioteca react y useEffect de la biblioteca react para manejar efectos secundarios.
import axios from 'axios';//axios para realizar solicitudes HTTP.
import './App.css'; //La línea import './App.js'; importa el archivo App.js

const AxolotlList = ({ limit = 10 }) => { //Se define como un componente funcional que toma una propiedad opcional limit (con un valor predeterminado de 10).
  const [axolotls, setAxolotls] = useState([]);

  useEffect(() => {
    axios.get(`https://api.thecatapi.com/v1/images/search?limit=${limit}`)//Se realiza una solicitud GET a la API https://api.thecatapi.com/v1/images/search con el parámetro limit.
      .then(response => {//Cuando la respuesta se recibe correctamente, actualiza el estado de axolotls con los datos obtenidos.
        setAxolotls(response.data);
      })
      .catch(error => {//Si ocurre un error, se muestra un mensaje de error en la consola.
        console.error('Error fetching axolotls:', error);
      });
  }, [limit]);

  return (///**/Renderiza una lista de imágenes de axolotl dentro de un contenedor con la clase axolotl-list-container.
    <div className='axolotl-list-container'>
      <ul className='axolotl-list'> 
        {axolotls.map(axolotl => (
          <li key={axolotl.id}>
            <img
              className='axolotl-img'
              src={axolotl.url} alt="Axolotl"//Se muestra la imagen que tiene ka URL
            />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AxolotlList;
