const readlineSync = require('readline-sync');

function speedDetector(speed) {
    const speedLimit = 70;
    const demeritPointThreshold = 5;
    const licenseSuspensionPoints = 12;

    if (speed <= speedLimit) {
        console.log("Ok");
    } else {
        const points = Math.floor((speed - speedLimit) / demeritPointThreshold);
        if (points > licenseSuspensionPoints) {
            console.log("License suspended");
        } else {
            console.log(`Points: ${points}`);
        }
    }
}

const speed = readlineSync.question('Enter the speed of the car: ');

// Convert the input to a number
const speedNumber = Number(speed);

if (!isNaN(speedNumber)) {
    speedDetector(speedNumber);
} else {
    console.log("Please enter a valid number");
}
