// Creating a server
const http = require('http');
const fs = require('fs');
// function rqListener(request, response) {
//     
// }

// http.createServer(rqListener);

// http.createServer(function(req, res) {
//    
// });

const server = http.createServer((req, res) => {
    const url = req.url;
    const method = req.method;
    if (url === '/') {
	res.write('<html>');
	res.write('<head><title>My First Page</title></head>');
	res.write('<body><form action="/message" method="POST"><input type="text" name="message"><button type="submit">SEND</button></form></body>');
	res.write('</html>');
	return res.end();
    }
    // Listens for POST to /message
    if (url === '/message' && method === 'POST') {
	const body = [];
	// buffer to push data from post.
	req.on('data', (chunk) => {
	    console.log(chunk);
	    body.push(chunk);
	});
	return req.on('end', () => {
	    const parsedBody = Buffer.concat(body).toString();
	    console.log(parsedBody);
	    const message = parsedBody.split('=')[1];
	    fs.writeFile('message.txt', message, (err) => {
		res.statusCode = 302;
		res.setHeader('Location', '/');
		return res.end();
	    });
	});
    }
    // console.log(req.url, req.method, req.headers);
    // Will quit the server (close program)
    // process.exit();
    res.setHeader('Content-Type', 'text/html');
    res.write('<html>');
    res.write('<head><title>My First Page</title></head>');
    res.write('<body><h1>Hello from Node.js Server</h1></body>');
    res.write('</html>');
    res.end();
});

server.listen(3000);

// NOTE:
// CORE MODULES:
// - http  -> Launch a server, send requests
// - https -> Launch a SSL server
// - fs
// - path
// - os
