const http = require('http');

const server = http.createServer((req, res) => {
    if (req.url === '/price') {
        res.writeHead(200, {'Content-Type': 'application/json'});
        res.end(JSON.stringify({ price: 100 }));
    } else {
        res.writeHead(404);
        res.end();
    }
});

const PORT = 3000;
server.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}/`);
});
