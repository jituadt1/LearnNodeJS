const http = require('http');

const server = http.createServer((req, res) => {
    if(req.url === '/'){
        res.write('Hi there!');
        res.end();
    }

    if(req.url === '/api/keys'){
        res.write(JSON.stringify([1,2,3]));
        res.end();
    }

});

server.listen(3000);

console.log('Server Listeing on 3000!');