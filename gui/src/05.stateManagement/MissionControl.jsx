/* eslint-disable no-unused-vars */
import { useState } from 'react';

function MissionControl() {
  const [rocketName, setRocketName] = useState('Cosmic Cruiser'); // Initial rocket name

  return (
    <div>
      <h1>Mission Control</h1>
      <p>Current spacecraft: {rocketName}</p>
    </div>
  );
}

export default MissionControl;