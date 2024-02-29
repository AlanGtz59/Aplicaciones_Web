// src/components/AxolotlList.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';

const AxolotlList = () => {
  const [axolotls, setAxolotls] = useState([]);

  useEffect(() => {
    axios.get('https://api.thecatapi.com/v1/images/search?limit=100')
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
            <img id='img' style={{
              width:150, 
              height:180, 
              marginTop: 1,
              margin: 20,
              backgroundColor: 'skyblue'
              }}
              src={axolotl.url} alt="Axolotl"/>
          </li>
          
        ))}
      </ul>
      
    </div>
  );
};

export default AxolotlList;
