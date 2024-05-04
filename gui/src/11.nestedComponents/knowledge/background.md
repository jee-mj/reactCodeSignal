# Understanding the `useEffect` Hook and Prop Changes

```jsx
import React, { useEffect } from "react";

function Spaceship({ fuelLevel }) {
  // useEffect watches fuelLevel, logs changes
  useEffect(() => {
    console.log(`Fuel level changed to ${fuelLevel}`);
  }, [fuelLevel]); // fuelLevel as dependency
}
```

## Nested Components and Propagation of Prop Changes

```jsx
import React, { useEffect } from "react";

function ControlPanel({ fuelLevel }) {
  // useEffect logs fuelLevel changes
  useEffect(() => {
    console.log(`Fuel level changed to ${fuelLevel}`);
  }, [fuelLevel]);
}

function Spaceship({ fuelLevel }) {
  // Nested ControlPanel component
  return <ControlPanel fuelLevel={fuelLevel} />;
}
```

### Practical Example: Using `useEffect` for Prop Changes in Nested Components

```jsx
import React, { useState, useEffect } from "react";

function ControlPanel({ fuelLevel }) {
  useEffect(() => {
    console.log(`Fuel level changed to ${fuelLevel}`);
  }, [fuelLevel]);

  // Rest of component's code
}

function Spaceship() {
  const [fuelLevel, setFuelLevel] = useState(100); // Fuel level state in Spaceship

  // Function to decrease fuel level
  const decreaseFuel = () => {
    setFuelLevel(fuelLevel - 10);
  };

  // Nested Control Panels
  return (
    <div>
      <ControlPanel fuelLevel={fuelLevel} />
      <ControlPanel fuelLevel={fuelLevel} />
      <button onClick={decreaseFuel}>Decrease Fuel</button>
    </div>
  );
}
```

Each time the button is clicked, the `fuelLevel` decreases by 10. As `fuelLevel` is an input to the dependency of the `ControlPanel` function, the change will also trigger a re-render of the `ControlPanel` components.

`useState` hook ensures that the new `fuelLevel` is preserved across re-renders.

### Advanced Practical Example: Three Levels of Nested Components

```jsx
import React, { useState, useEffect } from 'react';

function FuelGauge({ fuelLevel }) {
  useEffect(() => {
    console.log(`Fuel level in Fuel Gauge changed to ${fuelLevel}`);
  }, [fuelLevel]);

  // Rest of component's code
}

function ControlPanel({ fuelLevel }) {
  useEffect(() => {
    console.log(`Fuel level in Control Panel changed to ${fuelLevel}`);
  }, [fuelLevel]);

  // Nested Fuel Gauge
  return <FuelGauge fuelLevel={fuelLevel} />;
}

function Spaceship() {
  
  const [fuelLevel, setFuelLevel] = useState(100); // Fuel level state in Spaceship
  
  // Function to decrease fuel level
  const decreaseFuel = () => {
    setFuelLevel(fuelLevel - 10);
  }

  // Nested Control Panel
  return (
    <div>
      <ControlPanel fuelLevel={fuelLevel} />
      <button onClick={decreaseFuel}>Decrease Fuel</button>
    </div>
  );
}
```

