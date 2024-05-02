/* eslint-disable react/jsx-key */
const planets = [
  { name: 'Mercury', isExplored: false },
  { name: 'Venus', isExplored: false },
  { name: 'Earth', isExplored: true },
  { name: 'Mars', isExplored: true },
];

function PlanetList() {
  return (
    <div>
      {planets.map((planet) => (
        // Use conditional rendering to cross out the name of the planet if it is unexplored, using the `text-decoration` style with the value 'line-through.' Otherwise, set the same to 'none'.
        <p style={{ textDecoration: planet.isExplored ? 'none' : 'line-through', }}>{planet.name}</p>
      ))}
    </div>
  );
}

export default PlanetList;