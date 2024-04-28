/* eslint-disable react/prop-types */
// A functional component 'Spacecraft' that accepts 'type' prop
function Spacecraft(props) {
  // TODO: Return an h2 element to welcome passengers. Use the 'type' prop in the message.
  return <h2>Welcome, {props.type}</h2>;
}

// Set a default value 'Explorer' for 'type' prop of the Spacecraft component 
Spacecraft.defaultProps = {
  type: "Explorer",
};

export default Spacecraft;