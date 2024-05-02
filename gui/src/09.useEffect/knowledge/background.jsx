/* eslint-disable no-unused-vars */
/**
 * Understanding component lifecycle in functional components
 *
 * Cosmo stresses the importance of component lifecycles in handling and understanding `useEffect()`.
 * It defines the component lifecycle as a sequence of events that range from initialisation through to destruction in a React application.
 *
 * We looked at lifecycles briefly with Bob Ziroll @ Scrimba in `src/0.extras/`.
 *
 * A bad analogy is commonly used in the industry, so let's instead liken it to storage devices.
 * To get anything done with storage devices, we need to mount and unmount the device at the entry and exit points. This is basically what a lifecycle is.
 * Lifecycles go one step further, in that the mounting process can be interrupted, which is like when you disconnect a USB without unmounting it because it was never mounted-- maybe the partitions on the USB demonstrated that it was the wrong one (mislabelled or otherwise).
 *
 */

// Use Effect is excellent for simulating lifecycle methods:

// Mounting: By using useEffect and specifying an empty array `[]` as the dependency, the effect runs once after the initial render.

// Updating: All the data the effect needs to `watch` should be specified in the dependency array.

// Unmounting: A cleanup function returned from the effect helps prevent memory leaks during this phase.

// import React, { useState, useEffect } from 'react';
// 
// function MyComponent() {
//   const [count, setCount] = useState(0);
// 
//   useEffect(() => {
//     // Mounting and updating:
//     document.title = `You clicked ${count} times`;
// 
//     // Unmounting:
//     return function cleanup() {
//       document.title = `React App`; // Original title restored
//     };
// 
//   }, [count]);  // When count updates, re-run the effect 
// 
//   return (
//     <div>
//       <p>You clicked {count} times</p>
//       <button onClick={() => setCount(count + 1)}>
//         Click me
//       </button>
//     </div>
//   );
// }
// 
// export default MyComponent;

// In this case, every time you click the button, the `count` state will be updated along with the document title. When you navigate away from the component, the cleanup function restores the original title.

/**
 * Deep Dive: Cleanup Function and Handling Memory Leaks
 *
 * The example below demonstrates the `onMount` in the `useEffect` function body and the `onUnmount` in the `useEffect` return statement.
 *
 */

// import React, { useState, useEffect } from "react";
// 
// function MyComponent() {
//   const [size, setSize] = useState(window.innerWidth);
// 
//   // Effect to update state
//   useEffect(() => {
//     const handleResize = () => setSize(window.innerWidth);
//     window.addEventListener('resize', handleResize); // Set up subscription
// 
//     // Cleanup function to remove subscription
//     return () => {
//       window.removeEventListener('resize', handleResize);
//     };
// 
//   }, []); // Empty array ensures the effect runs only once
// 
//   return (
//     <div>
//       <p>Window Size: {size} px</p>
//     </div>
//   );
// }
// 
// export default MyComponent;

// The important takeaway is just to ensure to have a cleanup function for the unmount to ensure that memory leaks are not a concern.

/* eslint-disable react-hooks/exhaustive-deps */
// import React, { useState, useEffect } from 'react';
// 
// function MyComponent() {
//   const [state, setState] = useState("Initial State");
// 
//   // A mock async function
//   const asyncFunc = async () => {
//     return Promise.resolve("Updated state");
//   };
// 
//   useEffect(async () => {
//     let result = await asyncFunc();
//     setState(result);
//   }, []);
// 
//   return <div>{state}</div>;
// }
// 
// export default MyComponent;

// The above example shows that it is possible to have an async function directly in the functional component however, best practice is below:

import React, { useState, useEffect } from 'react';

function MyComponent() {
  const [state, setState] = useState("Initial State");

  // Mock async function
  const asyncFunc = async () => {
    return Promise.resolve("Updated state");
  };

  useEffect(() => {
    const callAsyncFunc = async () => {
      let val = await asyncFunc();
      setState(val);
    }

    callAsyncFunc();
    
  }, []);

  return <div>{state}</div>;
}

export default MyComponent;