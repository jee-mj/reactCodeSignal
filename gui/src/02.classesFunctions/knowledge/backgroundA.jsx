/* eslint-disable react/prop-types */ // <-- WHAT A TRICKY FANG!
// I think I looked at class components when that node_modules thing from the README.md hurt me.
import React from 'react';

function Welcome(props) {
  return (
    <div> <><p className='hidden'>Oh would you look at that, a useless fragment...</p></>
      <h1>Hello, {props.name}</h1>;
      <p>Welcome to the React Universe!</p>
    </div>
  );
}

class Hello extends React.Component {
  render() { // The render function determines what gets displayed
    <Welcome name="nobody" />
    return <h1>Hello, world!</h1>; // Hello, world! will be shown on the screen
  }
}

export default Hello;
// Scratched