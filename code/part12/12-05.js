//함수 선언문
function add(x,y) {
  return x + y;
}

//함수 참조
//console.dir은 console.log와는 달리 함수 객체의 프로퍼티까지 출력합니다.
console.dir(add); //f add(x,y)

//함수 호출
console.log(add(2,5));