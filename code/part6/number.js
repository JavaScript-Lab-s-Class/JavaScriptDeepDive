//모두 JS의 숫자 타입

var integer = 10; //정수
var double = 10.12; //실수
var negative = -20; //음의 정수

console.log(integer);
console.log(double);
console.log(negative); 

//JS의 2진수는 모두 10진수로 표현됨
var binary = 0b01000001; //2진수
var octal = 0o101; //8진수
var hex = 0x41; //16진수

//표기법만 다를뿐 모두 같은 값
console.log(binary); //65
console.log(octal); //65
console.log(hex); //65
console.log(binary === octal); //true
console.log(octal === hex); //true

//숫자 타입은 모두 실수로 처리됨
console.log(1 === 1.0); //true
console.log(4/2); //2
console.log(3/2); //1.5

//숫자 타입의 3가지 특별한 값
console.log(10 / 0); //Infinity
console.log(10 / -0); //-Infinity
console.log(1 * 'String'); //NaN