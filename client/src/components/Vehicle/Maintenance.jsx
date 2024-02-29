import React, { useState, useEffect } from 'react';
import axios from 'axios';
import moment from 'moment';
import Row from './Row.jsx';

const Maintenance = ({vehicleData}) => {

  const vehicleID = 1;

  const [vehicleService, setVehicleService] = useState([]);

  useEffect(() => {
    getVehicleService();
  }, []);

  const getVehicleService = () => {
    axios.get('/service', { params: { id: vehicleID } })
      .then((response) => {
        console.log(response.data);
        setVehicleService(response.data);
      });
  };

  return (
    <div className="service">
      <h2 className="text-l font-bold mb-0">Maintenance</h2>
      <table className="table w-full">
        <thead>
          <tr className="border-none">
            <th>Service</th>
            <th>Interval</th>
            <th>Last Serviced Date</th>
            <th>Last Serviced Mileage</th>
            <th>Due In</th>
          </tr>
        </thead>
        <tbody>
          {vehicleService.map((item, index) => (
              <Row row={item} key={index}/>
              ))}
        </tbody>
      </table>
    </div>
  );

}

export default Maintenance;