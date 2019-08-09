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
// const os = require('os');
// var totalMemory = os.totalmem();
// var freeMemory = os.freemem();
// console.log('Total Memory: ' + totalMemory);

//Template string in ES6 :ECMAScript 6
//console.log(`Total Memory: ${totalMemory}`);
//console.log(`Free Memory: ${freeMemory}`);
//you can use backticks to not have to make a string the normal way. you just use ${} when adding the variable

//FILE SYSTEM
// const fs = require('fs');
// const files = fs.readdirSync('./');
// console.log(files);
// fs. almost every operation defined here comes in 2 forms: synchornous or blocking or asynchonorus or non blocking. in a real work app, use asynchronous. if you're using node, you may have several clients for the backend, asycnhonrous will work with that

// fs.readdir('./', function(err, files) {
//     if (err) console.log('Error', err)
//     else console.log('Result', files);
// });

//EVENT
//an event is a signal that something has happened in our application. everytime we receive a request on http, we receive an event (example: event may be new request)

const EventEmitter = require('events');
//indicates that it is a class
//const emitter = new EventEmitter();
//in this, the eventemitter is an object



const Logger = require('./logger');
const logger = new Logger();

// Register a listener
logger.on('messageLogged', (arg) => {
    console.log('Listener called', arg)
});

logger.log('message');

//emit means making a noise, or producing somethting. signaling something

//with this you can pass data about the event that just happened

// Raise an event called logging we also want to send some date, {data: message}

//so to raise for events to signal something that's happened, create a class that extends to the eventemitter. that class will have function to look for eventemitter and ability to log a message. then you can use the "this.emit"

//HTTP
const http = require('http');
const server = http.createServer((req, res) => {
    if (req.url === '/') {
        res.write('hello world');
        res.end();
    }

    if (req.url === '/api/courses')
    res.write(JSON.stringify([1, 2, 3]));
    res.end();
});
//with this, we can create a web server
//server.on('connection', (socket) => {
//    console.log('New connection')
//});
server.listen(3000);
console.log('listening on port 3000...');

//express framework