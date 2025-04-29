import React, { useEffect, useState } from 'react';
import axios from 'axios';

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

    
    <div>
         <ul>
        {data.map(item => (
          <li key={item.id}>
            <h2>{item.nev}</h2>
            <p>alkotás azonosító:{item.alkotasAzonosito}</p>
     <p>keletkezesKezdoIdopontjaInt:{item.keletkezesKezdoIdopontjaInt}</p>
     <p>tipus:{item.tipus}</p>
     <p>megjelenítendő név:{item.megjelenitendoNev}</p>
     <br></br>
          </li>
        ))}

      </ul>
    </div>
  );
};

export default HomePage;