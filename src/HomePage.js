import React, { useEffect, useState } from 'react';
import axios from 'axios';
import logo from './870-200x300-blur_2-grayscale.jpg';

const HomePage = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios.get('https://gist.githubusercontent.com/calvez/56bec47cb9c97d9999574adc65ef5368/raw/51f01cb2a160748d87dd40eae7d3785272a87355/all.json')
      .then(response => {
        setData(response.data);
        setLoading(false);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
        setLoading(false);
      });
  }, []);

  return (


    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr' }} >
       
 
        {data && data.map(item => (
          
          <span class="card">
            <img src={logo} alt="logo" />
            <p><b>{item.keletkezesKezdoIdopontjaInt}</b></p>
            <h2 class="text-3xl font-bold underline">{item.nev}</h2>
            <p>alkotás azonosító: {item.alkotasAzonosito}</p>
     
     <p>tipus: {item.tipus}</p>
     <p>megjelenítendő név: {item.megjelenitendoNev}</p>
     <br></br>
          </span>
        ))}

  
    </div>
  );
};

export default HomePage;