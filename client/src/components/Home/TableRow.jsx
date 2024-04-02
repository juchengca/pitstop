import React, { useState, useEffect } from 'react';

const TableRow = ({ vehicle }) => {
  return (
    <tr style={{ border: 'none' }}>
      <td >
        <div className="flex">
          <div className="avatar">
            <div className="mask mask-squircle w-12 h-12">
              <img src={vehicle.url} alt="Vehicle" />
            </div>
          </div>
          <div>
            <div className="font-bold">{vehicle.year} {vehicle.make} {vehicle.model} {vehicle.nickname ? `(${vehicle.nickname})` : null}</div>
            <div className="text-sm opacity-50">{vehicle.mileage}mi             <button className="btn btn-ghost btn-xs">Update</button></div>
          </div>
        </div>
      </td>
      <td >
        <div className="font-bold">{vehicle.ownership === 'Own' ? 'Active' : 'Sold'}</div>
      </td>
    </tr>
  );
};
export default TableRow;