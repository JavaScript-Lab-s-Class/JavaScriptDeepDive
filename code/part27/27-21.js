const arr = new Array(10);

console.log(arr); //[empty = 10]
console.log(arr.length); //10
console.log(Object.getOwnPropertyDescriptors(arr));
/*
{
  length: { value: 10, writable: true, enumerable: false, configurable: false }
}
 */