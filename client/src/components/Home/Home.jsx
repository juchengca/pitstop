import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import Overview from './Overview.jsx';

const Home = () => {

  var userID = 1;

  const [userData, setUserData] = useState([]);

  const [vehiclesData, setVehiclesData] = useState([]);

  useEffect(() => {
    getVehiclesData();
  }, []);

  const getVehiclesData = () => {
    axios.get('/vehicles', { params: { id: userID } })
      .then((response) => {
        setVehiclesData(response.data);
      });
  };

  useEffect(() => {
    getUserData();
  }, []);

  const getUserData = () => {
    axios.get('/user', { params: { id: userID } })
      .then((response) => {
        console.log(response.data);
        setUserData(response.data);
      });
  };

  return (
  <div className="flex flex-col">
    <div style={{ display: 'flex', alignItems: 'center', marginLeft: '1.5rem' }}>
    <h2 className="text-xl font-bold mb-0">Welcome back, {userData.first_name}!</h2>
    </div>
    <hr className="my-4" />
    <Overview vehiclesData={vehiclesData}/>
    <hr className="my-4" />
    <div style={{ display: 'flex', alignItems: 'center', marginLeft: '1.5rem' }}>
      <h2 className="text-xl font-bold mb-0">Reminders</h2>
    </div>
    <hr className="my-4" />
    <div style={{ display: 'flex', alignItems: 'center', marginLeft: '1.5rem' }}>
      <h2 className="text-xl font-bold mb-0">Notes</h2>
    </div>
  </div>
  );
}

export default Home;