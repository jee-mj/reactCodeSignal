// Let's figure out which planets have moons
let planets = [
  { name: 'Mercury', hasMoons: false },
  { name: 'Venus', hasMoons: false },
  { name: 'Earth', hasMoons: true },
];

// TODO: Check each planet and display "{{Planet Name}} has moons." or "{{Planet Name}} has no moons."  
planets.forEach((planet) => {
  // Replace {{Planet Name}} with the actual name of the planet
  console.log(`${planet.name} ${planet.hasMoons ? "has moons." : "has no moons."}`); /* TODO: add ternary operation to set moonMessage based on planet.hasMoons */;
});