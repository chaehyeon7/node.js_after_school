let http = require('http');

let server = http.createServer();
let port = 6000;
server.listen(port, '127.0.0.1', 50000, function() {
    console.log('서버 시작 %d', port);
});

server.on('connection', function(socket) {
    let addr = socket.address();
    console.log('클라이언트가 connection 되었습니다. : %s, %d', addr.address, addr.port)
});
server.on('request', function(req, res) {
    console.log('클라이언트의 request 이벤트가 발생했습니다.');
});
server.on('close', () => {
    console.log('서버가 close 되었습니다.');
});