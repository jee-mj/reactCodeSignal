import { useState } from 'react';

// TODO: Create a SpaceshipCargo component.
function SpaceshipCargo() {
  // TODO: Initialize the state to store the current cargo weight with value 100.
  const [cargoWeight, setCargoWeight] = useState(100);
  // TODO: Implement the jettisonCargo function to decrease cargo weight by 30 without going below zero, trigger this on button click. If the previous weight is below 30, then the new weight should be set to 0.
  const jettisonCargo = () => {
    if (cargoWeight < 30 && cargoWeight > 0) {
      setCargoWeight(e => e - e)
    } else {
      setCargoWeight(e => e - 30)
    }
  }

  // TODO: Structure the component return block with a paragraph for displaying cargo weight and a button for triggering the jettisonCargo function.

  return (
    <>
      <div>
        <h2>Cargo Weight</h2>
        <p>{cargoWeight}</p>
        <button onClick={jettisonCargo}>Update</button>
      </div>
    </>
  );
}

export default SpaceshipCargo;