import React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import TopBar from './components/TopBar/TopBar.jsx'
import NavMenu from './components/Navigation/NavMenu.jsx';
import Garage from './components/Garage/Garage.jsx';
import Vehicle from './components/Vehicle/Vehicle.jsx';

const App = () => {
  return (
    <BrowserRouter>
      <div className="flex flex-col h-screen">
        <TopBar />
        <div className="flex flex-1">
          <NavMenu />
          <div className="flex-1">
            <Routes>
              <Route exact path="/" element={<Garage />} />
              <Route path="/car" element={<Vehicle />} />
            </Routes>
          </div>
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