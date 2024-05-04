/* eslint-disable react/prop-types */
import { useState, useEffect } from 'react';

//  Alert the mission name change effects
function MissionControl({ missionName }) {
  useEffect(() => {
    console.log('Current Mission: ' + missionName)
  }, [missionName])
  return (
    <>
      <h2>Current Mission</h2>
      <p>{missionName}</p>
    </>
  );
}

function Spacecraft() {
  const [missionName, setMissionName] = useState('Apollo');

  const toggleMission = () => {
    setMissionName(missionName === 'Apollo' ? 'Challenger' : 'Apollo');
  };
  return (
    <>
      <MissionControl missionName={missionName} />
      <button onClick={toggleMission}>Toggle Mission</button>
    </>
  );
}

export default Spacecraft;