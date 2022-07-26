function Person(name, age){
    this.name = name;
    this.age = age;
}
Person.prototype.walk = function(speed){
    console.log(speed + ' km 속도로 걸어갑니다.');
}
let person1 = new Person('소녀시대', 20);
let person2 = new Person('BTS', 29);
let person3 = new Person('싸이', 40);
console.dir(person1);
console.dir(person2);
console.dir(person3);
console.log(person1.name);
person1.walk(4);
console.log(person3.name);
person1.walk(10);

//Student (hb, name, ban, study(time) time시간을 공부합니다. ) 4명 객체를 만듭니다.
function Student(hb, name, ban){
    this.hb = hb;
    this.name = name;
    this.ban = ban;
}
Student.prototype.study = function(time){
    console.log(time + '시간을 공부합니다.');
}
let s1 = new Student(3306, '김채현', 3);
console.dir(s1);
s1.study(2);