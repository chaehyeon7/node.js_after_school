var url = require('url');

var curURL = url.parse('https://www.google.com/search?q=alflaakdltmxj+rhemdgkrry&rlz=1C1YTUH_koKR1015KR1015&oq=alflaakdltmxj+rhemdgkrry&aqs=chrome..69i57.3206j0j1&sourceid=chrome&ie=UTF-8');
var curStr = url.format(curURL);

console.log('주소 문자열 : %s', curStr);
console.dir(curURL);


var querystring = require('querystring');
var param = querystring.parse(curURL.query);
console.log('요청 파라미터 중 queyr의 값 : %s', param.query);
console.log('원본 요청 파라미터 : %s', querystring.stringify(param));