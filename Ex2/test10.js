let fs = require('fs');

let infile = fs.createReadStream('./mirim.txt', {flags: 'r'});
let outfile = fs.createWriteStream('./output3.txt', {flags: 'w'});

infile.on('data', function(data){
    console.log('읽어들인 데이터', data);
    outfile.write(data);
});


infile.on('end', function(){
    console.log('파일읽기 종료');
    outfile.end( function() {
        console.log('종료...');
    });
})