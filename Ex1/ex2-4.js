// 옛날 방식
var num1 = 1;
var num2 = 2;
var result = num1 + num2;
var string1 = num1 +' 더하기' + num2 +'는 \'' + result +'\'';
console.log(string1); // 1 더하기 2는'3'


//new
let num3 = 1;
let num4 = 2;
let result2 = num3 + num4;
let string2 = `${num3} 더하기 ${num4} 는 ${result2}`;
console.log(string2);