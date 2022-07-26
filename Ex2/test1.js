let result = 0;

console.time('총 실행 시간');
for(let i= 0; i<= 1000; i++){
    result += i;
}

console.timeEnd('총 실행 시간');
console.log('1부터 100까지의 합계 %d', result);
console.log('현재 실행한 파일의 이름 : %s', __filename);
console.log('현재 실행한 파일의 디렉토리, 패스 : %s', __dirname);
console.log('argv 속성의 파라메터 갯수 : ' + process.argv.length);
console.dir(process.argv);

process.argv.forEach( (element, index) => {
    console.log(index + ': ' + element);
});