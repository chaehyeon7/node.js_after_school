var fs = require('fs');
var readline = require('readline');

// 한줄씩 읽는 함수
function processFile(filename) {
    var instream = fs.createReadStream(filename); 
    var reader = readline.createInterface(instream, process.stdout);
     
    var count = 0;
    // 한 줄씩 읽어들인 후에 발생하는 이벤트
    reader.on('line', function(line) {
        console.log('한 줄 읽음 : ' + line);
        count += 1;
        
        // 공백으로 구분
        var tokens = line.split(' ');
        // console.log(tokens[2]);
        if (tokens != undefined && tokens.length > 0) {
            console.log('#' + count + ' -> ' + tokens[0]);
        }
    });
}

// 함수 실행
var filename = './customer.txt';
processFile(filename);