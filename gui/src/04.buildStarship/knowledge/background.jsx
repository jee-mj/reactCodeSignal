/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
/* eslint-disable react-refresh/only-export-components */
/**
 * Time to become the Musk.
 * 
 * Cosmo wants another Musk. This is my job. I am going to be Elon Musk.
 * 
*/

// const Spaceship = () => {
//   const startThrusters = () => {
//     console.log("Thrusters are ON");  
//   }
//   return ( 
//     <button onClick={startThrusters}>Start Thrusters</button>  
//   );
// }

// const Spaceship = () => {
//   const fuelStatus = () => {
//     let fuelLevel = 70;
//     if (fuelLevel > 50) {
//       return "Fuel Status: Good";
//     } else {
//       return "Fuel Status: Low";
//     }
//   };
//   return (
//     <h3>{fuelStatus()}</h3>
//   )
// }

/**
 * Nesting Functional Components
 * 
 * We might also require nesting of functional components.
 * 
 * This might result in some confusion.
 * After all, the only difference between a functional component and method,
 * is that a functional component will return HTML,
 * whereas a method can return anything else (this includes returning a void type).
 * 
 */

// const Thruster = () => {
//   return (
//     <p>Thruster is ready!</p>
//   );
// }
// 
// const Spaceship = () => {
//   return (
//     <div>
//       <Thruster />
//     </div>
//   )
// }

/**
 * Passing Primitive Data Types as Props
 * 
 */

// const Thruster = (props) => {
//   return (
//     <p>{props.status}</p>
//   )
// }
// 
// const Spaceship = () => {
//   let thrusterStatus = "Thrusters are functional!";
// 
//   return (
//     <div>
//       <Thruster status={thrusterStatus} />
//     </div>
//   );
// }


/**
 * Passing Methods as Props
 * 
 * Methods can also be passed as props. We've grown way past the message bug.
 * 
 */

// const Thruster = (props) => {
//   // The thruster makes use of the method passed as a prop
//   return (
//     <div>
//       <p>{props.status}</p>
//       <button onClick={props.startThrusters}>Start Thrusters</button>
//     </div>
//   );
// }
// 
// const Spaceship = () => {
//   let thrusterStatus = "Thrusters are functional!"
// 
//   // OUt method 'startThrusters' is defined in the 'Spaceship' component
//   const startThrusters = () => {
//     console.log("Thrusters are ON");
//   }
// 
//   // We pass 'startThrusters' method to the 'Thruster' component as a prop
//   return (
//     <div><Thruster status={thrusterStatus} startThrusters={startThrusters} /></div>
//   );
// }
