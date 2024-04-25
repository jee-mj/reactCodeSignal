// TODO: Declare an array with 'Car', 'Truck', 'Bike' as vehicle types
vehicleTypes = ['Car', 'Truck', 'Motorbike'];

// TODO: Use array destructuring to separate the first vehicle from the others
const [car, ...temp] = vehicleTypes;

// TODO: Use the spread operator to add a 'Spaceship' to the array of other vehicles
expandedVehicles = [...temp, 'Spaceship']

// Display the updated list of vehicles in the fleet on UI
// You should get 'Truck', 'Bike', and 'Spaceship' there
console.log(`The expanded vehicle fleet: ${expandedVehicles.join(', ')}.`);