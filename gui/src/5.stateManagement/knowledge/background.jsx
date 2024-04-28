/* eslint-disable no-unused-vars */
import React, { useState } from 'react';

function Counter() {
  const [count, setCount] = useState(0); // Declare 'count' state variable with initial value 0 

  return (
    <div>
      <p>You clicked {count} times</p> {/* Display the current count */}
      <button onClick={() => setCount(count + 1)}>
        Click me
      </button> {/* Increment count when button is clicked */}
    </div>
  );
}

export default Counter;

/**
 * States just basically re-render
 * 
 * 
 * 
*/