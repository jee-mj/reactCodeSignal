// more annoyware
import { useState, useEffect } from 'react';

function StarrySkyApp() {
  const [starCount, setStarCount] = useState(100);

  useEffect(() => {
    alert(`[DEBUG] The star count has changed: ${starCount}`);
  }, [starCount]);

  return (
    <>
      <h2>Star Count: {starCount}</h2>
      <button onClick={() => setStarCount(current => current + 10)}>Add Ten</button>
    </>
  );
}

export default StarrySkyApp;
