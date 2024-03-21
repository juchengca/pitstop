import React, { useState, useEffect } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import TopBar from './components/TopBar/TopBar.jsx'
import Garage from './components/Garage/Garage.jsx';
import Vehicle from './components/Vehicle/Vehicle.jsx';
import Home from './components/Home/Home.jsx';

const App = () => {

  return (
    <BrowserRouter>
      <div className="flex flex-col h-screen">
        <TopBar />
          <div className="flex-1">
            <Routes>
              <Route exact path="/" element={<Home />} />
              <Route path="/garage" element={<Garage />} />
              <Route path="/vehicle/:vehicleID" element={<Vehicle  />} />
            </Routes>
          </div>
      </div>
    </BrowserRouter>
  );
};

const container = document.getElementById('app');
const root = createRoot(container);

root.render(
  <App />
);