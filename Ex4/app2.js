let express = require('express');
let http = require('http');
let path = require('path');
let bodyParser = require('body-parser');
let static = require('serve-static');

let app = express();

app.set('port', process.env.PORT || 3000);
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());
app.use(static(path.join(__dirname, 'public')));

app.use((req, res, next) => {
    console.log('첫번째 미들웨어 요청함');
    let parId = req.body.id || req.query.id;
    let parPass = req.body.password || req.query.password;
    res.writeHead('200', {'Content-Type' : 'text/html;charset=utf-8'});
    res.write('<h1> Express 서버에서 응답한 결과입니다.</h1>');
    res.write('<h2> 3306 김채현 </h2>');
    res.write('<p> 아이디 =' + parId + '</p>');
    res.write('<p> 비밀번호 = ' + parPass + '</p>');
    res.end();
});

http.createServer(app).listen(app.get('port'), () => {
    console.log('Express 서버 3000 포트 시작 합니다.');
});