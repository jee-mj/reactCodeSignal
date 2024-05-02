/* eslint-disable no-unused-vars */
// import React, { useState } from 'react';
// 
// function Counter() {
//   const [count, setCount] = useState(0); // Declare 'count' state variable with initial value 0 
// 
//   return (
//     <div>
//       <p>You clicked {count} times</p> {/* Display the current count */}
//       <button onClick={() => setCount(count + 1)}>
//         Click me
//       </button> {/* Increment count when button is clicked */}
//     </div>
//   );
// }
// 
// export default Counter;

/**
 * In this code snippet, our state variable `count` is declared and initialized with `0` using `useState(0)`.
 * When the button is clicked, the `count` increases, initiating a re-render of the component.
 *
 * States are probably the simplest concept to use in React...
 *
 */

// import React, { useState } from 'react';
// 
// function FavoriteColor() {
//   const [favoriteColor, setFavoriteColor] = useState("blue"); // Define 'favoriteColor' with initial (hardcoded) value 'blue'
// 
//   return (
//     <div>
//       <h1>My favorite color is {favoriteColor}</h1> {/* Output the favorite color */}
//     </div>
//   );
// }
// 
// export default FavoriteColor;

// import React, { useState } from 'react';
// 
// function FavoriteColor() {
//   const [favoriteColor, setFavoriteColor] = useState("blue");
// 
//   return (
//     <div>
//       <h1>My favorite color is {favoriteColor}</h1> {/* Output the favorite color */}
//       <button onClick={() => setFavoriteColor("green")}> {/* Change color on button click */}
//         Change Favorite Color
//       </button> 
//     </div>
//   );
// }
// 
// export default FavoriteColor;