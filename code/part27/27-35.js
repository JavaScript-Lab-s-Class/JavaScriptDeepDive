const arr = [0];

arr[100] = 100;

console.log(arr); //[0,empty = 99,100]
console.log(arr.length); //101

//명시적으로 값을 할당하지 않은 요소는 생성되지 않는다.
console.log(Object.getOwnPropertyDescriptors(arr));
/*
{
  '0': { value: 0, writable: true, enumerable: true, configurable: true },
  '100': { value: 100, writable: true, enumerable: true, configurable: true },
  length: {
    value: 101,
    writable: true,
    enumerable: false,
    configurable: false
  }
}
 */