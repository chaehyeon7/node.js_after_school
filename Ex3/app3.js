let express = require('express');
let http = require('http');
const { Http2ServerResponse } = require('http2');

// 익스프레스 객체 생성
let app = express();

// 미들웨어
app.use(function (req, res, next) {
    console.log('첫번째 미들웨어를 실행함');

    let userAgent = req.header('User-Agent');
    let paraName = req.query.name;

    res.writeHead('200', {'Content-Type':'text/html;charset=utf-8'});
    res.write('<h2> 3306 김채현 </h2>');
    res.end('<h1> Express서버에서 응답한 결과입니다. </h1>');
    res.write('<p> User-Agent ' + userAgent + '</p>');
    res.write('<p> param name ' + paraName + '</p>');
    res.end(); // 응답 끝
});

// 익스프레스 서버 속성 지정
http.createServer(app). listen(3000, function() {
    console.log('익스프레스 서버를 시작합니다. ' + app.get('port'));
});