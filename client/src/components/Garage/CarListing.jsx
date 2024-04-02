import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const CarListing = ({ vehicle }) => {

  return (
    <div className="car-listing">
      <img className="car-image" src={vehicle.url} />
      <Link to={`/vehicle/${vehicle.id}`}>
        <div className="p-4" style={{ paddingBottom: 0 }}> {/* Adjusted padding-bottom to 0 */}
        <li className="flex items-center">
        <h2 className="text-xl font-bold mb-0">{vehicle.year} {vehicle.make} {vehicle.model} {vehicle.trim}</h2>
          <p className="text-sm font-bold ml-2 mb-0">({vehicle.nickname})</p>
          </li>
          <p className="mileage text-sm font-bold mb-0">{vehicle.mileage} mi</p>
          <p className="text-sm mb-0" style={{ fontStyle: 'italic' }}>{vehicle.description}</p>

        </div>
        </Link>
    </div>
  );
};

export default CarListing;