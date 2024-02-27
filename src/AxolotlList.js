// src/components/AxolotlList.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const AxolotlList = () => {
  const [axolotls, setAxolotls] = useState([]);

  useEffect(() => {
    axios.get('https://api.thecatapi.com/v1/images/search?limit=10')
      .then(response => {
        setAxolotls(response.data);
      })
      .catch(error => {
        console.error('Error fetching axolotls:', error);
      });
  }, []);

  return (
    <div>
      <ul>
        {axolotls.map(axolotl => (
          <li key={axolotl.id}>
            <img src={axolotl.url} alt="Axolotl" className='w-150'/>
            <p>{axolotl.fact}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AxolotlList;
