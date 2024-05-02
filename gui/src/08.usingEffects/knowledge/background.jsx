// Discipline is finishing this instead of cutting it short -,-

// import React, { useState, useEffect } from 'react';
// 
// function CounterApp() {
//   // useState is used to add a counter state to our component
//   // setCounter is a function to update the current counter
//   const [counter, setCounter] = useState(0);
//   
//   useEffect(() => {
//     // useEffect logs the current counter value each time it changes
//     console.log(`Counter value: ${counter}`);
//   }, [counter]); // observe changes in the counter
// 
//   return (
//     <div>
//       <p>Counter: {counter}</p>
//       <button onClick={() => setCounter(counter + 1)}>
//         Increase Count
//       </button>
//     </div>
//   );
// }
// export default CounterApp;

// useEffect(() => {
//   console.log(`Component rendered.`);
// }); // Always render without dependencies

// useEffect(() => {
//   console.log(`Counter value: ${counter}`);
// }, [counter]); // Standard example for useEffect

// useEffect(() => {
//   console.log("Component did mount OR update");
// 
//   // cleanup function
//   return () => {
//     console.log("Component will unmount");
//   }
// }, []); //