let systemsFunctional = true, fuelLevel = 85, commStatus = true;

// TODO: Extend the condition so that we also consider commStatus true for showing a message 'All systems go for Mars mission.'
let logMessage = systemsFunctional && fuelLevel > 80 && commStatus == true ? 'All systems go for Mars mission.' : 'Systems check failed or insufficient fuel or comm system down.';
console.log(logMessage);