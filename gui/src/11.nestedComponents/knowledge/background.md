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
