const http = require('http');

const server = http.createServer();


server.on("connection", (socket) => {
    console.log('A new request was made!');
});

server.listen(3000);

console.log("Server Listening on port 3000.....")