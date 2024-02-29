// src/components/AxolotlList.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './App.js'; // Asegúrate de tener este archivo CSS

const AxolotlList = ({ limit = 100 }) => {
  const [axolotls, setAxolotls] = useState([]);

  useEffect(() => {
    axios.get(`https://api.thecatapi.com/v1/images/search?limit=${limit}`)
      .then(response => {
        setAxolotls(response.data);
      })
      .catch(error => {
        console.error('Error fetching axolotls:', error);
      });
  }, [limit]);

  return (
    <div className='axolotl-list-container'>
      <ul className='axolotl-list'>
        {axolotls.map(axolotl => (
          <li key={axolotl.id}>
            <img
              className='axolotl-img'
              src={axolotl.url} alt="Axolotl"
            />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AxolotlList;
