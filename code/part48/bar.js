//x변수는 전역변수다. foo.js에서 선언한 전역 변수 x와 중복된 선언이다.
var x = 'bar';

//foo.js에서 선언한 전역 변수 x의 값이 재할당 되었다.
console.log(window.x); //bar