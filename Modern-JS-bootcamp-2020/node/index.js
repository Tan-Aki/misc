// require('./myscript.js');

// console.log(require.cache);

// let firstCounter = require('./myscript.js');

// firstCounter++;

// console.log(firstCounter);

// let secondCounter = require('./myscript.js');

// console.log(secondCounter);

const counterObject = require('./myscript.js');

console.log(counterObject.getCounter());
counterObject.incrementCounter();
console.log(counterObject.getCounter());

const newCounterObject = require('./myscript.js');
console.log(newCounterObject.getCounter());
