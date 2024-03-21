import React, { useState, useEffect } from 'react';
import axios from 'axios';
import moment from 'moment';

const Row = ({row, vehicleData}) => {

  //mileage to k
  var toK = function formatNumberToK(num) {
    if (num >= 1000) {
      const result = num / 1000;
      return result % 1 === 0 ? result.toFixed(0) + 'k' : result.toFixed(1) + 'k';
    } else {
      return num.toString();
    }
  };

  //interval mi or yr display
  var intervalDisplay = function (mi, yr) {
    if (mi && yr) {
      if (mi === -1 && yr === -1) {
        return 'N/A';
      }
      return `${toK(mi)} mi / ${yr} yrs`;
    } else if (mi) {
      return `${toK(mi)} mi`;
    } else if (yr) {
      return `${yr} yrs`;
    }
  };

  var calculateDue = function(miLast, dateLast, mi, yr) {
    if (mi === -1 && yr === -1) {
      return 'N/A';
    }
    if (mi) {
      return `${toK(miLast + mi)} mi`;
    } else if (yr) {
      return `${moment(dateLast).add(yr, 'years').format('MM/DD/YYYY')}`;
    }
  };

  var calculateDueIn = function(miLast, dateLast, mi, yr) {
    if (mi === -1 && yr === -1) {
      return 'N/A';
    }
    if (mi) {
      return `${toK(mi - (vehicleData.mileage - miLast))} mi`;
    } else if (yr) {
      var dueDate = moment(dateLast).add(yr, 'years');
      return `${dueDate.fromNow().replace(/^in\s/, '')}`;
    }
  };

  var interval = intervalDisplay(row.mi_interval, row.yr_interval);

  return (
    <tr className="border-none">
      <td>{row.service}</td>
      <td>{interval}</td>
      <td>{row.date_serviced ? moment(row.date_serviced).utc().format('MM/DD/YYYY') : 'N/A'}</td>
      <td>{row.miles_serviced ? row.miles_serviced : 'N/A'}</td>
      <td>{calculateDue(row.miles_serviced, row.date_serviced, row.mi_interval, row.yr_interval)}</td>
      <td>{calculateDueIn(row.miles_serviced, row.date_serviced, row.mi_interval, row.yr_interval)}</td>
    </tr>
  );

}

export default Row;