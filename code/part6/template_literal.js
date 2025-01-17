//템플릿 리터럴
var template = `Template literal`;
console.log(template);

//멀티라인 문자열 - 템플릿 리터럴
var template = `<ul>
    <li><a href = "#">Home</a></li>
</ul>`;

console.log(template);

//문자열 연산자를 이용한 문자열 연결
var first = 'Ung-mo';
var last = 'Lee';

//ES5: 문자열 연결
console.log('My name is ' + first + ' ' + last + '.'); //My name is Ung-mo Lee.

//ES6: 표현식 삽입
console.log(`My name is ${first} ${last}.`); //My name is Ung-mo Lee.

//표현식 삽입 내 내용은 문자열로 강제 타입변환되어 삽입됨
console.log(`1 + 2 = ${1 + 2}`); //1 + 2 = 3

//표현식 삽입은 템플릿 리터럴 내에서 사용해야 함 - 일반 문자열에서의 표현식 삽입은 문자열로 취급됨
console.log('1 + 2 = ${1 + 2}'); // 1+ 2 = ${1 + 2}