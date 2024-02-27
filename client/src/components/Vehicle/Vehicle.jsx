import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Carousel from './Carousel.jsx';
import Info from './Info.jsx';

const Vehicle = () => {

  const vehicleID = 1;

  const [vehicleData, setVehicleData] = useState(false);

  useEffect(() => {
    getVehicleData();
  }, []);

  const getVehicleData = () => {
    axios.get('/vehicle', { params: { id: vehicleID } })
      .then((response) => {
        setVehicleData(response.data);
      });
  };

  return (
    <div className="ml-10 mr-10">
      {vehicleData ?
      <Carousel vehicleData={vehicleData} />
      : null
      }
      <div>
        <Info vehicleData={vehicleData}/>
      </div>
    </div>
  )
}

export default Vehicle;