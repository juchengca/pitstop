import React, { useState, useEffect } from 'react';
import { createRoot } from 'react-dom/client';
import TopBar from './components/TopBar/TopBar.jsx'
import Garage from './components/Garage/Garage.jsx'
import Vehicle from './components/Vehicle/Vehicle.jsx'
import NavMenu from './components/Navigation/NavMenu.jsx'

const App = () => {
  return (
    <div className="flex flex-col h-screen"> {/* Use flexbox layout with column direction */}
      <TopBar />
      <div className="flex flex-1"> {/* Container for NavMenu and Vehicle with flexible height */}
        <NavMenu />
        <div className="flex-1"> {/* Vehicle Page occupies remaining space */}
          <Vehicle />
        </div>
      </div>
    </div>
  );
}

const container = document.getElementById('app');
const root = createRoot(container);
root.render(<App />);