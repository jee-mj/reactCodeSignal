// Function to list ships in the fleet using ES6 Rest Parameters
function assembleFleet(...spacecrafts) {
  return spacecrafts.join(", ");
}

// List of spacecraft types for our Cosmos and Vehicles scenario
const fleet = assembleFleet('Shuttle', 'Rover', 'Capsule', 'Starship', 'Cargo Ship');

// Display the fleet of spacecrafts in the UI
console.log(`Spacecraft Fleet Ready: ${fleet}`);