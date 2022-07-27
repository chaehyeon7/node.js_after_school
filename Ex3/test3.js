var http = require('http');
var fs = require('fs');

let server = http.createServer();
let port = 3000;
server.listen(port, function() {
    console.log('서버 시작 %d', port);
});

server.on('request', function(req, res) {
    console.log('클라이언트 요청이 들어왔습니다.');

    var filename = 'house.png';
    fs.readFile(filename, function(err, data) {
        res.writeHead(200, {"Content-Type":"image/png"});
        res.write(data);
        res.end();
    });
});