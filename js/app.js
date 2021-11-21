const DateTime = luxon.DateTime;
const london = DateTime.now().setZone('Europe/London');
const ny = DateTime.now().setZone('America/New_York');
console.log(`Time in London is ${london.toFormat('HH:MM')}`);
console.log(`Time in New York is ${ny.toFormat('HH:MM')}`);
