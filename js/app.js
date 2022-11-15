const dt = luxon.DateTime;
const london = dt.now().setZone('Europe/London');
const ny = dt.now().setZone('America/New_York');
console.log(`Time in London is ${london.hour}:${london.minute}`);
console.log(`Time in New York is  ${ny.hour}:${ny.minute}`);
