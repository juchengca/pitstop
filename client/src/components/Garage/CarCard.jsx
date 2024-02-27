import React, { useState, useEffect } from 'react';

const CarCard = ({ vehicle }) => {
  return (
    <div className="card bg-base-100 shadow-xl flex flex-col" style={{ margin: 10 }}>
      <figure className="h-3/5 overflow-hidden">
        <img src={vehicle.url} alt="Vehicle" className="w-full h-full object-cover" />
      </figure>
      <div className="p-4" style={{ paddingBottom: 0 }}> {/* Adjusted padding-bottom to 0 */}
        <h2 className="text-xl font-bold mb-0">{vehicle.year} {vehicle.make} {vehicle.model} {vehicle.trim}</h2>
        <p className="text-sm font-bold mb-0">{vehicle.nickname}</p>
        <p className="text-sm mb-0">{vehicle.vin}</p>
        <p className="text-sm mb-0">{vehicle.mileage} mi</p>
      </div>
    </div>
  );
};

export default CarCard;

/*
const CarCard = ({vehicle}) => {
  return (
  <div className="card w-96 bg-base-100 shadow-xl">
    <figure><img src={vehicle.url} alt="Shoes" /></figure>
      <div className="card-body">
        <h2 className="card-title">{vehicle.year} {vehicle.make} {vehicle.model} {vehicle.trim}</h2>
          <p>Oil Change due in 2000 mi</p>
            <div className="card-actions justify-end">
            </div>
      </div>
  </div>
  )
}
*/