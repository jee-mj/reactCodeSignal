import { useState } from 'react';

function SpaceshipFuel() {
  const [fuel, setFuel] = useState(5);

  const useFuel = () => {
    setFuel(prevFuel => prevFuel - 1);
  }

  return (<>
    <h1>Fuel</h1>
    <h2>{fuel === 0 ? "WARNING: Fuel is depleted." : fuel}</h2>
    {fuel === 0 ? "" : <button onClick={useFuel}>Use Fuel</button>}
  </>);
}

export default SpaceshipFuel;