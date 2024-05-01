/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
import { useState } from 'react';

function SpaceshipControl() {
  const [engineState, setEngineState] = useState('off');

  return (
    <div>
      <h1>Spaceship Engine is: {engineState}</h1>
      <button onClick={() => setEngineState('on')}>
        Start Engine
      </button>
    </div>
  );
}

export default SpaceshipControl;