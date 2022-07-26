let calc = require('./module1');
console.log(' calc 모듈 호출 add %d', calc.add(2, 3));
console.log(' calc 모듈 호출 빼기 %d', calc.sub(5, 3));
console.log(' calc 모듈 호출 mul %d', calc.mul(2, 3));
console.log(' calc 모듈 호출 나머지 %d', calc.mod(2, 3));

let ksk = require('./module2');
console.log(' add %d', ksk.add(20,30));
console.log(' sub %d', ksk.sub(20,30));
console.log(' mul %d', ksk.mul(20,30));
console.log(' mod %d', ksk.mod(20,30));
