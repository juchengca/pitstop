import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Info = ({vehicleData}) => {

  console.log(vehicleData);
  return (
    <div>
      <div className="specs">
      <ul>
      <h2 className="text-xl font-bold mb-0">{vehicleData.year} {vehicleData.make} {vehicleData.model} {vehicleData.trim}</h2>
          <p className="text-sm font-bold mb-0">{vehicleData.nickname}</p>
          <p className="text-sm mb-0">{vehicleData.color}</p>
          <p className="text-sm mb-0">{vehicleData.motor}</p>
          <p className="text-sm mb-0">{vehicleData.reg_month}</p>
          <p className="text-sm mb-0">{vehicleData.vin}</p>
          <p className="text-sm mb-0">{vehicleData.mileage} mi</p>
      </ul>
    </div>
    <div></div>
      <div className="info">
        <ul>
          <li>Maintenance</li>
          <li>Oil Change due in 2000mi</li>
          <li>Brake Pads due in 10000mi</li>
          <li>Trans Fluid due in 8900mi</li>
          <li>Spark Plugs due in 19800mi</li>
        </ul>
      </div>
    </div>
  );

}

export default Info;