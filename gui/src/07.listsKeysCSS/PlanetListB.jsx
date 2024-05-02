import './App.css';

const planets = [
  { id: 1, name: 'Mercury', isHabitable: false },
  { id: 2, name: 'Venus', isHabitable: false },
  { id: 3, name: 'Earth', isHabitable: true },
  { id: 4, name: 'Mars', isHabitable: true }
];

export default function PlanetList() {
  return (
    <div>
      {planets.map(({ id, name, isHabitable }) => (
        <p key={id} className={isHabitable ? 'habitable' : 'not-habitable'}> {isHabitable};
          {name} - {isHabitable ? 'Habitable' : 'Not Habitable'}
        </p>
      ))}
    </div>
  );
}