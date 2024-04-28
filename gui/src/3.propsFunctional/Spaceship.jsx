/* eslint-disable react/prop-types */
// Spaceship component accepting 'name' and 'speed' props
function Spaceship(props) {
  return <p>{props.name} cruises at {props.speed} lightyears per hour.</p>;
}

// Defining default props for Spaceship
Spaceship.defaultProps = {
  name: 'Explorer',
  speed: 5000
};

export default Spaceship;