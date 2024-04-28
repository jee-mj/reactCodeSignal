/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
// Define a functional component named 'Welcome' that accepts a prop 'name'.
export default function Welcome(props) {
  // Return a greeting message that includes the 'name' prop.
  return <h1>Hello, {props.name}</h1>;
}

/**
 * Introduction to Props in Functional Components
 * 
 * props: short for `properties`, is innately an objective convention found in React
 * 
 * Properties are used to pass data between components.
 * As this terminology may be intrinsically confusing to developers that have fluency in several languages...
 * React hooks changed the conventional methodology of using properties to more closely comply with what is undertood to be a property in Objective programming.
 * 
 * Functionally, props are read-only. This means that a child component can only read the props sent from a parent component but can't change them.
 * This is by design in React.
 * 
 */
function App() {

  return (

    <div>

      <Welcome name="Galactic Student" />

    </div>

  );

}
/**
 * Above we can see the implementation where the child component reads the properties that are passed to it from the parent component.
 * 
 * If we were required to pass more primitive data types, we would follow the convention below and use curly brackets
 * 
 * <DisplayNumber value={123} />
 * <DisplayTruth value={true} />
 * 
 */

/**
 * Default properties
 * 
 * We can use hard-coded default properties (well, it's etched in deeper) for fall-back purposes.
 * 
 * // Define a functional component named 'Welcome' that accepts a prop 'name'.
 * function Welcome(props) {
 *   return <h1>Hello, {props.name}</h1>;
 * }
 * 
 * // Setting a default value for the 'name' prop.
 * Welcome.defaultProps = {
 *   name: 'Galactic Traveler'
 * };
 * 
 */