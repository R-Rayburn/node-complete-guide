// Creating a server
const http = require('http');
const routes = require('./routes');
// function rqListener(request, response) {
//     
// }

// http.createServer(rqListener);

// http.createServer(function(req, res) {
//    
// });

const server = http.createServer(routes.handler);

server.listen(3000);

// NOTE:
// CORE MODULES:
// - http  -> Launch a server, send requests
// - https -> Launch a SSL server
// - fs
// - path
// - os
