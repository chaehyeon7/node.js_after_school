var path = require('path');
// 디렉터리 이름 합치기
var directories = ["users", "milke", "docs"];
var docsDirectory = directories.join(path.sep);
console.log('문서 디렉터리 : %s', docsDirectory);
// 디렉터리 이름과 파일 이름 합치기
var curPath = path.join('/Users/milke', 'notepad.exe');
console.log('파일 패스 : %s', curPath);