import React, { useState, useEffect } from 'react';
import axios from 'axios';
import moment from 'moment';

const Row = ({row}) => {
  console.log('row', row);
  return (
    <tr className="border-none">
      <td>{row.service}</td>
      <td>{row.mi_interval}</td>
      <td>{moment(row.date_serviced).utc().format('MM-DD-YYYY')}</td>
      <td>{row.miles_serviced}</td>
      <td>{row.miles_serviced}</td>
    </tr>
  );

}

export default Row;