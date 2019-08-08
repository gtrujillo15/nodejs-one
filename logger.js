
var url = 'http://mylogger.io/log';

function log(message) {
    //Send an HTTP request
    console.log(message);
}

// to make this public to app.js file
module.exports.log = log;