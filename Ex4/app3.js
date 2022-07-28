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

let router = express.Router();

// 라우팅 함수 방법 3
router.route('/process/login')
    .post((req, res) => {
        console.log('/process/login 처리중');
        let parId = req.body.id || req.query.id;
        let parPass = req.body.password || req.query.password;
        res.writeHead('200', {'Content-Type' : 'text/html;charset=utf-8'});
        res.write('<h1> Express 서버에서 응답한 결과입니다.</h1>');
        res.write('<h1> express.router 객체를 사용 </h1>');
        res.write('<h2> 3306 김채현 </h2>');
        res.write('<p> 아이디 =' + parId + '</p>');
        res.write('<p> 비밀번호 = ' + parPass + '</p>');
        res.end();
    });

app.use('/', router);
app.all('*', (req, res) => {
    res.status(404).send('404 에러 - 페이지를 찾을 수 없습니다.');
})

http.createServer(app).listen(app.get('port'), () => {
    console.log('Express 서버 3000 포트 시작 합니다.');
});