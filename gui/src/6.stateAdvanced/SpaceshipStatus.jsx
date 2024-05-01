import { useState } from 'react';

function SpaceshipStatus() {
  const [status, setStatus] = useState("Ready");

  const updateStatus = () => {
    if (status === "Ready") {
      setStatus(prevStatus => prevStatus === "Ready" ? "Launched" : "Ready");
    } else {
      setStatus(prevStatus => prevStatus === "Launched" ? "Landed" : "Ready");
    } // Code could be cleaner
  };

  return (
    <div>
      <p>The spaceship is {status} for exploration.</p>
      <button onClick={updateStatus}>Toggle Status</button>
    </div>
  );
}

export default SpaceshipStatus;