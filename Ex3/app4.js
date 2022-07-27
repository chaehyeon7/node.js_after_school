let express = require('express');
let http = require('http');
let bodyParser = require('body-parser');

let app = express();

app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());

app.use(function(req, res, next){
    console.log('첫번째 미들웨어 요청 처리함......');
    let paraId = req.body.id || req.query.id;
    let paraPass = req.body.password || req.query.password;
    res.writeHead('200', {'Content-Type' : 'text/html;charset=utf-8'});
    res.write('<h1> Express 서버에서 응답함니다....</h1>');
    res.write('<h2> 3412 오윤서 </h2>');
    res.write('<p> 아이디 =' + paraId + '</p>');
    res.write('<p> 비밀번호 = ' + paraPass + '</p>');
    res.end();
})

http.createServer(app).listen(3000, function(){
    console.log('Express 서버 3000 포트 시작 합니다.');
})