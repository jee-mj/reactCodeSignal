// TODO: Create a functional component named Spacecraft that returns JSX
// It should include a <div> with an <h1> element for a welcome message
// and a <button> element that shows an alert with a message when clicked

export default function Spacecraft() {
  return <div>
    <h1>Welcome!</h1>
    <button onClick={() => alert('Welcome on board!')}>Initiate Launch Sequence</button>
  </div>;
}

// Remember to export your Spacecraft component