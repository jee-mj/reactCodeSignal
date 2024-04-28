/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React from 'react';

const ControlPanel = (props) => {
  return (
    <div>
      <p>Status: {props.shipStatus}</p>
      <button onClick={props.launch}>Launch Ship</button>
    </div>
  );
}

const Spaceship = () => {
  let status = "Ready for launch";
  const launchAlert = () => {
    alert("Launching spaceship!")
  }

  return (
    <div>
      <h1>Galactic Voyager 1 </h1>
      <ControlPanel shipStatus={status} launch={launchAlert} />
    </div>
  );
}

export default Spaceship;