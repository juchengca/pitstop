import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import TableRow from './TableRow.jsx';

const Overview = ({ vehiclesData }) => {
  return (
    <>
      <div style={{ display: 'flex', alignItems: 'left', marginLeft: '1.5rem' }}>
        <h2 className="text-xl font-bold mb-0">Overview </h2>
        <Link to="/garage" className="text-xl" style={{ marginLeft: '0.5rem'}}> Enter Your Garage</Link>
      </div>
      <div style={{ display: 'flex', alignItems: 'left', marginLeft: '1.5rem' }}>
        <table className="table" style={{ borderCollapse: 'collapse' }}>
          {/* head */}
          <thead>
            <tr style={{ border: 'none' }}>
              <th >Vehicle</th>
              <th >Status</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {vehiclesData.map((item, index) => (
              <TableRow vehicle={item} key={index} />
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default Overview;