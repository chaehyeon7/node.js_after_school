let fs = require('fs');

fs.writeFile('./output.txt', 'Helo World~~~', function(err){
    if(err){
        console.log('Error~~' + err);
    }
    console.log('output 파일에 쓰기 완료했어요..');
})