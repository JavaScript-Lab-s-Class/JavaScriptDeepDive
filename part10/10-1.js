var person = {
    name: 'Lee',
    sayHello: function () {
        console.log(`Hello! My name is ${this.name}`);
    }
};

console.log(typeof person); //objcet
console.log(person); //{name: "Lee", sayHello:f}
console.log(person.sayHello());