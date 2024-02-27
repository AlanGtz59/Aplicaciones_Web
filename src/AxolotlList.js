// src/components/AxolotlList.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const AxolotlList = () => {
  const [axolotls, setAxolotls] = useState([]);

  useEffect(() => {
    axios.get('https://theaxolotlapi.netlify.app/api/random')
      .then(response => {
        setAxolotls(response.data);
      })
      .catch(error => {
        console.error('Error fetching axolotls:', error);
      });
  }, []);

  return (
    <div>
      <h1>Adorable Axolotls</h1>
      <ul>
        {axolotls.map(axolotl => (
          <li key={axolotl.id}>
            <img src={axolotl.url} alt="Axolotl" />
            <p>{axolotl.fact}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AxolotlList;