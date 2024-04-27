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