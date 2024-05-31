var person = {
    name: 'Lee'
};

//프로퍼티 동적 생성
person.age = 20;

//person 객체에 age 프로퍼티가 존재합니다.
//따라서 delete 연산자로 age 프로퍼티를 삭제할 수 있습니다.
delete person.age;

//person 객체에 address 프로퍼티가 존재하지 않습니다.
//따라서 delete 연산자로 address 프로퍼티를 삭제할 수 없습니다. 이때, 에러가 발생되지 않습니다.
delete person.address;

console.log(person); //{name: "Lee"}