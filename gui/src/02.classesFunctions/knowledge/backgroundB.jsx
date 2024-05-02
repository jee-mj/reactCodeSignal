/* eslint-disable react/prop-types */ // <-- WHAT A TRICKY FANG!
// I think I looked at class components when that node_modules thing from the README.md hurt me.
import React from 'react';

const someFunction = () => 5;

function Welcome() {
  // Define some variables
  const salutation = "Hello,";
  const object = "Universe!";

  // Here we use a variable and a ternary operation inside the curly braces
  return (<div>
    <p>someFunction returns {someFunction()}</p> <br></br>
    <h1>{salutation} {object === "Universe!" ? "How vast you are!" : "Who are you?"}</h1>
  </div>);
} // Usage: <Welcome />


class Hello extends React.Component {
  render() {
    return (
      <div>
        <Welcome />
      </div>
    );
  }
}
export default Hello;
// Scratched