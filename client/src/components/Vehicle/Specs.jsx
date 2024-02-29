import React, { useState, useEffect } from 'react';
import axios from 'axios';
import moment from 'moment';

const Specs = ({vehicleData}) => {

  return (
      <div className="specs">
        <ul className="flex flex-col">
          <li className="flex items-center">
            <h2 className="text-xl font-bold mb-0">{vehicleData.year} {vehicleData.make} {vehicleData.model} {vehicleData.trim}</h2>
            <p className="text-sm font-bold ml-2 mb-0">  ({vehicleData.nickname})</p>
          </li>
          <li>
            <p className="text-sm mb-0">{vehicleData.description}</p>
          </li>
        </ul>
        <div className="overflow-x-auto">
        <hr className="my-4" />
        <h2 className="text-l font-bold mb-0">Specifications</h2>
      <table className="table">
        <tbody>
          <tr className="border-none">
            <td>{vehicleData.mileage} mi</td>
            <td>{vehicleData.vin}</td>
            <td>{vehicleData.reg_month}</td>
          </tr>
          <tr className="border-none">
            <td>{vehicleData.color}</td>
            <td>{vehicleData.motor}</td>
            <td>{vehicleData.type}</td>
          </tr>
          <tr className="border-none">
            <td>{vehicleData.ownership}</td>
            <td>Purchase Date {moment(vehicleData.purchase_date).utc().format('MM-DD-YYYY')}</td>
            <td>Sold Date</td>
          </tr>
        </tbody>
      </table>
    </div>
      </div>
  );

}

export default Specs;

/*
          <p className="text-sm mb-0">{vehicleData.color}</p>
          <p className="text-sm mb-0">{vehicleData.motor}</p>
          <p className="text-sm mb-0">{vehicleData.reg_month}</p>
          <p className="text-sm mb-0">{vehicleData.purchase_date}</p>
          <p className="text-sm mb-0">{vehicleData.ownership}</p>
          <p className="text-sm mb-0">{vehicleData.vin}</p>
          <p className="text-sm mb-0">{vehicleData.mileage} mi</p>
          */