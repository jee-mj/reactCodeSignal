// import { useState } from 'react';

// function SpaceshipFuel() {
//   // TODO: Declare a state variable for tracking the fuel level with initial value 100
//   const [fuelLevel, setFuelLevel] = useState('100'); 
//   const useFuel = fuelLevel <= 9 ? fuelLevel : fuelLevel - 10

//   // TODO: Return a div containing a paragraph to show the current fuel level and a button labeled 'Use Fuel'
//   // When 'Use Fuel' is clicked, the fuel level should decrease by 10
//   return (
//     <div>
//       <dl>
//         <dt>Fuel</dt>
//         <dd>{fuelLevel}</dd>
//       </dl>
//       <button onClick={() => { setFuelLevel(useFuel) }}>Use Fuel</button>
//     </div>
//   );
// }
// export default SpaceshipFuel;

// Great effort in diving into React state management with this SpaceshipFuel component! It's clear you understand the basics of using useState and handling button clicks to update the state. However, there's a slight mix-up in the logic for decreasing the fuel level which doesn't align with the task's requirement exactly.
// The conditional logic you implemented unfortunately won't decrease the fuel level by 10 in every scenario as intended. Instead of modifying the fuelLevel based on a condition before setting it, you should directly apply the decrease within the setFuelLevel function when the button is clicked.
// Would you like a hint on how to adjust this logic correctly, ensuring the fuel level decreases by 10 each time, regardless of its current value? 🚀

/* Cosmo is a blundering fool */

import { useState } from 'react';

function SpaceshipFuel() {
  // TODO: Declare a state variable for tracking the fuel level with initial value 100
  const [fuelLevel, setFuelLevel] = useState(100);

  // TODO: Return a div containing a paragraph to show the current fuel level and a button labeled 'Use Fuel'
  // When 'Use Fuel' is clicked, the fuel level should decrease by 10
  return (
    <div>
      <dl>
        <dt>Fuel</dt>
        <dd>{fuelLevel}</dd>
      </dl>
      <button onClick={() => { setFuelLevel(fuelLevel - 10) }}>Use Fuel</button>
    </div>
  );
}

export default SpaceshipFuel;