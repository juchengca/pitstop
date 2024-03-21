import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import Carousel from './Carousel.jsx';
import Specs from './Specs.jsx';
import Maintenance from './Maintenance.jsx';
import NavMenu from './NavMenu.jsx';

const Vehicle = () => {

  const { vehicleID } = useParams();

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
    <div className="flex flex-1">
      <NavMenu />
      <div className="flex-1 ml-10 mr-10">
        {vehicleData ? (
          <>
            <Carousel vehicleData={vehicleData} />
            <div>
              <Specs vehicleData={vehicleData} />
            </div>
            <hr className="my-4" />
            <div>
              <Maintenance vehicleData={vehicleData} />
            </div>
          </>
        ) : null}
      </div>
    </div>
  );
}

export default Vehicle;