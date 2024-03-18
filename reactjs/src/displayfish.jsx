import React, { useEffect, useState } from 'react';
import axios from 'axios';
import 'owl.carousel';
import './carousel.css';


const GlobalFish = () => {
const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const options = {
        method: 'GET',
        url: 'https://fish-species.p.rapidapi.com/fish_api/fishes',
        headers: {
          'X-RapidAPI-Key': 'e20c3653femsh8e6f9c27e2a2e1dp1c3064jsn3b35eba963f9',
          'X-RapidAPI-Host': 'fish-species.p.rapidapi.com'
        }
      };
      
      try {
        const response = await axios.request(options);
        console.log(response.data);
        setData(response.data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []); 

  return(
   


<div class="slider">
	<div class="slide-track">
		{data.map((column)=>
    <a href={column.url} target='_blank'>
      <div class="slide-item" align='center'>
    <img  src={column.img_src_set["2x"]} height="200" width="200" alt="" />
    <div><label htmlFor="">{column.name}</label></div>
    
  </div>
    </a>
    )}
		
		
	</div>
</div>

  );
};

export {GlobalFish};
