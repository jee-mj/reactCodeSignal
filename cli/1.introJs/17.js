import updateOrbitInfo from './orbitFunctions.js';

let orbitCount = 0;
let intervalId = setInterval(() => {
  orbitCount++;
  updateOrbitInfo(orbitCount); // Display orbit count in the UI

  if (orbitCount >= 3) { // Let's stop after 3 orbits to observe
    clearInterval(intervalId);
  }
}, 1000);