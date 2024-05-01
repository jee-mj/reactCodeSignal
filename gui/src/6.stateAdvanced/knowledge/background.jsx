/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
/* eslint-disable react-refresh/only-export-components */
// Cosmo refers to props as a suitcase, carrying items from parent to child components.

// Child Component

// function ChildComponent(props) {
//   return <p>{props.message}</p>;
// }
// 
// // Parent Component
// function ParentComponent() {
//   return <ChildComponent message="Hello there!" />
// }
// 
// ParentComponent(); // Renders: Hello there!

// Cosmo's like: In React, the previous state helps us understand changes in state over time. When managing React state, the concept of the previous state becomes crucial due to the asynchronous nature of `setState` events.

// import React, { useState } from 'react';
// 
// function Counter() {
//   const [count, setCount] = useState(0);
//   const handleClick = () => {
//     setCount(count + 1); // Here, count is the previous state
//   };
//   return (
//     <div>
//       <p>You clicked {count} times</p> {/* Displays the count */}
//       <button onClick={handleClick}>Click me</button> {/* Increments the counter when clicked */}
//     </div>
//   );
// }

/**
 * State update based on previous state
 *
 * Conditional updating of state based on logical transformations.
 *
 */

// const handleClick = () => {
//   setCount(prevCount => prevCount + 1);
// };

// function Counter() {
//   const [count, setCount] = useState(0);
// 
//   const incrementTwice = () => {
//     setCount(count + 1);
//     setCount(count + 1);
//   };
// 
//   return (
//     <div>
//       <p>You clicked {count} times</p>
//       <button onClick={incrementTwice}>Click me</button>
//     </div>
//   );
// }

// The code above will fail period. It will only manage to update the count by 1.

// const incrementTwice = () => {
//   setCount(prevCount => prevCount + 1);
//   setCount(prevCount => prevCount + 1);
// };

// const handleClick = () => {
//   setCount(prevCount => {
//     // Only increment count if prevCount is less than 10.
//     // Otherwise, leave it as it is.
//     return prevCount >= 10 ? prevCount : prevCount + 1;
//   });
// };

// The examples above will succeed in updating the count by 2 as both lines update the value of count through the most recent value of count.

// const handleClick = (operation) => {
//   setCount(prevCount => {
//     // If the operation is increment and prevCount is less than 10, increment count.
//     // If the operation is decrement and prevCount is greater than 0, decrement count.
//     // Otherwise, return count as it is.
//     if (operation === 'increment' && prevCount < 10) return prevCount + 1;
//     if (operation === 'decrement' && prevCount > 0) return prevCount - 1;
//     return prevCount;
//   });
// };

// The example above demonstrates a more advanced usage of `setState`, where the function signature accepts a property.
// The outcome of the method is conditionally produced based on the property.