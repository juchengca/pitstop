import React, { useState, useEffect } from 'react';
import axios from 'axios';
import moment from 'moment';

const Specs = ({vehicleData}) => {

  var monthConvert = function (number) {
    var month;
    if (number === 1) {
      month = 'January';
    } else if (number === 2) {
      month = 'February';
    } else if (number === 3) {
      month = 'March';
    } else if (number === 4) {
      month = 'April';
    } else if (number === 5) {
      month = 'May';
    } else if (number === 6) {
      month = 'June';
    } else if (number === 7) {
      month = 'July';
    } else if (number === 8) {
      month = 'August';
    } else if (number === 9) {
      month = 'September';
    } else if (number === 10) {
      month = 'October';
    } else if (number === 11) {
      month = 'November';
    } else if (number === 12) {
      month = 'December';
    }
    return month;
  };

  var regMonth = monthConvert(vehicleData.reg_month);

  return (
    <div className="specs">
    <ul className="flex flex-col">
        <li className="flex items-center">
          <h2 className="text-xl font-bold mb-0">{vehicleData.year} {vehicleData.make} {vehicleData.model} {vehicleData.trim}</h2>
          <p className="text-sm font-bold ml-2 mb-0">({vehicleData.nickname})</p>
        </li>
        <li>
          <p className="text-sm mb-0">{vehicleData.description}</p>
        </li>
      </ul>
      <hr className="my-4" />
      <h2 className="text-l font-bold mb-0">Specifications</h2>
      <div className="overflow-x-auto">
        <table className="table">
          <tbody>
            <tr className="border-none">
              <td><h3 className="text-xs font-bold">Mileage</h3>{vehicleData.mileage} mi</td>
              <td><h3 className="text-xs font-bold">VIN</h3>{vehicleData.vin}</td>
              <td><h3 className="text-xs font-bold">Registration</h3>{regMonth}</td>
            </tr>
            <tr className="border-none">
              <td><h3 className="text-xs font-bold">Color</h3>{vehicleData.color}</td>
              <td><h3 className="text-xs font-bold">Motor</h3>{vehicleData.motor}</td>
              <td><h3 className="text-xs font-bold">Transmission</h3>{vehicleData.transmission}</td>
            </tr>
            <tr className="border-none">
              <td><h3 className="text-xs font-bold">Type</h3>{vehicleData.type}</td>
              <td><h3 className="text-xs font-bold">Purchase Date</h3>
                {moment(vehicleData.purchase_date).format('MMMM D, YYYY')} </td>
              <td><h3 className="text-xs font-bold">Sold Date</h3>{vehicleData.sold_date ? vehicleData.sold_date : 'N/A'}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Specs;