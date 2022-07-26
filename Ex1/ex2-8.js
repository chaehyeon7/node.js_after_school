let Users = [{name:'소녀시대', age:20},
            {name: '걸스데이', age:22}];
Users.push({name:'티아라', age:23});

// let add = (a, b) => a + b;
// Users.push(add);
// Users.push({name: '티아라', age:23});
// console.log('사용자 수 : %d', Users.length);
// console.log('첫번째 사용자 이름 : %s', Users[0].name);
// console.log('add 한수실행 : %d', Users[3](10,20));

// 방법1
for(let i =0; i<Users.length; i++){
    console.log('배열 요소 #' + i + ":%s", Users[i].name);
}
// 방법2
Users.forEach(element => {
    console.log('배열요소 # %s' + element.name)
});
Users.splice(1, 0, {name:'애프터스쿨',age:25});
console.log('splice()로 요소를 인덱스 1에 추가 한 후....');
console.dir(Users);
Users.splice(2,1);
console.dir(Users);