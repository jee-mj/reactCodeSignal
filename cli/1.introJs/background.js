const car = {
  wheels: 4,
  color: 'red',
};

const fruits = ['apple', 'orange', 'banana'];

// Destructuring
let { wheels, color } = car;
let [fruit1, fruit2, fruit3] = fruits;

console.log(wheels); // prints 4
console.log(fruit1); // prints apple

let type = 'Suv';
let brand = 'Audi';

let carTwo = { type, brand };

let key = 'frontend';
let value = 'react';

let preference = { [key]: value }; // { frontend: 'react' }

// Spread

const house = {
  habitat: 'Elm Street',
  type: 'Detatched',
  habitants: ['John', 'Anna', 'Tom']
};

house.habitants.push('Lisa');

house = { ...house, habitants: [...house.habitants, 'Lisa'] }; // Way better example than what we did though...

const arr = [1, 2, 3, 4, 5];
const [a, b, ...others] = arr;
