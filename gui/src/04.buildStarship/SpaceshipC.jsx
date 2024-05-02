/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
import React from 'react';

const Planet = (props) => {
  // Logical mistake here: 'planetName' is not defined in this scope
  return <h2>Welcome to planet {planetName}!</h2>;
};

const Spaceship = () => {
  const planetName = 'CosmoFleet-1';
  
  return (
    <div>
      <h1>Spaceship Control Center</h1>
      <Planet name={planetName} />
    </div>
  );
};

export default Spaceship;