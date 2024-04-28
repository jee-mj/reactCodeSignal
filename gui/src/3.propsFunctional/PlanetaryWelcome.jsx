/* eslint-disable react/prop-types */
// TODO: Define a functional component called 'Planet' that returns an h2 element greeting the passed 'name' prop.
export default function PlanetaryWelcome(props) {
  return <h2>Welcome to planet: {props.name}</h2>;
}
// TODO: Assign a default value to 'name' using defaultProps for when no prop is provided.

PlanetaryWelcome.defaultProps = {
  name: "Earth"
}

// TODO: Make the Planet component available for use in other files with the appropriate export statement.

// This actually does not make any sense at all given the instructions provided by Cosmo, but this is the solution.