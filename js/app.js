const DateTime = luxon.DateTime;
const london = DateTime.now().setZone('Europe/London');
const ny = DateTime.now().setZone('America/New_York');
console.log(`Time in London is ${london.hour}:${london.minute}`);
console.log(`Time in New York is  ${ny.hour}:${ny.minute}`);
