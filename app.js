// function sayHello (name) {
//     console.log("Hello " + name)
// }

// //sayHello("Gaby");

// console.log(window);


// LOADING A MODULE
//const logger = require('./logger');
//one of the functions in Node, this function takes one arguement and that's the path of the target module we want to load

//logger.log('message');

//USING PATH
//const path = require('path');
//node assumes that this is a built-in module.
//var pathObj = path.parse(__filename);
//console.log(pathObj);

//OP OPERATING SYSTEM
const os = require('os');
var totalMemory = os.totalmem();
var freeMemory = os.freemem();
// console.log('Total Memory: ' + totalMemory);

//Template string in ES6 :ECMAScript 6
console.log(`Total Memory: ${totalMemory}`);
console.log(`Free Memory: ${freeMemory}`);
//you can use backticks to not have to make a string the normal way. you just use ${} when adding the variable