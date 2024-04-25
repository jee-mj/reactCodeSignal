// Imagine you have to create an object detection logic for your spacecraft.

// TODO: Define an object with properties to determine if it is an asteroid with the following keys: isRocky and isOrbiting
class spaceObject {
  constructor(isRocky, isOrbiting) {
    this.isOrbiting = isOrbiting;
    this.isRocky = isRocky;
  }
}

let ufo = new spaceObject(1, 0);

// TODO: Use a ternary conditional operator to decide what message to display. If the object is rocky and NOT orbiting, you should post a message 'Asteroid detected!'; otherwise, post 'No asteroid detected.'
message = ufo.isRocky == 1 && ufo.isOrbiting != 1 ? "Asteroid Detected!" : "No asteroid detected."; // This makes me appreciate python for readability 🤮

// TODO: Display the appropriate message on the spacecraft's interface in the 'detectionStatus' paragraph.
document.querySelector('#detectionStatus').innerHTML = message;
