const requestHandler = (req, res) => {
    const url = req.url;
    const method = req.method;

    if (url === '/') {
        res.write('<html>');
        res.write('<head></head>');
        res.write('<body>');
        res.write('<h1>Hello there</h1>');
        res.write('<form action="/create-user" method="POST"><input type="text" name="username"><button type="submit">ADD</button></form>')
        res.write('</body>')
        res.write('</html>');
        return res.end();
    }

    if (url === '/user') {
        res.write('<html>');
        res.write('<head></head>');
        res.write('<body><ul><li>user #1</li></ul></body>');
        res.write('</html>');
        return res.end();
    }

    if (url === '/create-user' && method === 'POST') {
        return req.on('end', () => {
            const parsedBody = Buffer.concat(body).toString();
            console.log(parsedBody);
            res.setHeader('Location', '/users');
            return res.end();
        })
    }

    res.end();
};

module.exports.handler = requestHandler;