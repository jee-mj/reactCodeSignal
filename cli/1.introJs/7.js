// We're analyzing if a planet is suitable for a space station.
let planet = {
  hasWater: true,
  hasAtmosphere: true,
  temperature: 15  // Temperature is now in the moderate range
};

// Apply a nested ternary operator based on the new planet properties.
let analysisResult = planet.hasWater
  ? (planet.hasAtmosphere
    ? (0 < planet.temperature < 30
      ? 'Perfect for a space station!'
      : 'Temperature not suitable.')
    : 'Lacks atmosphere.')
  : 'Unsuitable, no water detected.';

console.log(analysisResult);