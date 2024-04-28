/* eslint-disable react/prop-types */
const ControlPanel = (props) => {
  return <button onClick={props.performSystemCheck}>System Check</button>;
}

const Spaceship = () => {
  const performSystemCheck = () => {
    alert("All systems go!");
  }
  return <ControlPanel performSystemCheck={performSystemCheck} />;
}

export default Spaceship;