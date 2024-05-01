import { useState } from 'react';

// TODO: Declare two state variables: 'fuelLevel' with initial value 100 and 'hullIntegrity' with initial value 'Stable'

// TODO: Create the updateSpaceshipStatus function that:
// - Calculate and set the new fuelLevel: If previous level is greater than 20, then decrease it by 10, otherwise do not change it
// - Updates hullIntegrity conditionally based on the new fuel level: If new fuel level is less or equal to 20 and previous level is 'Stable', then change it to 'Critical' otherwise do not change.

// TODO: Render the fuelLevel and hullIntegrity in paragraph tags
// TODO: Add a button that triggers the updateSpaceshipStatus when clicked

export default function SpaceshipDashboard() {
  const [fuelLevel, setFuelLevel] = useState(100);
  const [hullIntegrity, setHullIntegrity] = useState("Stable");

  const updateSpaceshipStatus = () => {

    if (hullIntegrity === "Stable") { fuelLevel <= 20 ? setHullIntegrity("Critical") : "" }
    if (fuelLevel > 20) { setFuelLevel(prevFuelLevel => prevFuelLevel - 10) }

  }
  return (
    <>
      <div>
        <div>
          <h3>Fuel Level</h3>
          <p>{fuelLevel}</p>
        </div>
        <div>
          <h3>Hull Integrity</h3>
          <p>{hullIntegrity}</p>
        </div>
        <button onClick={updateSpaceshipStatus}>Manual Update</button>
      </div>
    </>
  );
}