import React, { useState, useEffect } from 'react';
import CarCard from './CarCard.jsx';
import axios from 'axios';

const Garage = () => {

  const userID = 1;

  const [vehiclesData, setVehiclesData] = useState([]);

  useEffect(() => {
    getVehiclesData();
  }, []);

  const getVehiclesData = () => {
    axios.get('/vehicles', { params: { id: userID } })
      .then((response) => {
        setVehiclesData(response.data);
      });
  };

  return (
    <div>
        <div className="flex justify-between">
          <a className="btn btn-ghost text-xl">My Garage</a>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
        {vehiclesData.map((item, index) => (
        <CarCard vehicle={item} key={index}/>
        ))}
        </div>
    </div>
  )
}

export default Garage;