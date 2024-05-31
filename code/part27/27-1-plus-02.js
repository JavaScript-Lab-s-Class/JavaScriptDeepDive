const emptyArr = [];

console.log(emptyArr[1]); //undefined;
console.log(emptyArr.length); //0

const arr = [
  'zero', 'one', 'two', 'three', 'four',
  'five', 'six', 'seven', 'eight', 'nine'
]

//해당 배열을 객체 리터럴로 표현
const obj = {
  '0': 'zero', '1': 'one', '2': 'two',
  '3': 'three', '4': 'four', '5': 'five',
  '6': 'six', '7': 'seven', '8': 'eight',
  '9': 'nine'
}


console.log(arr[1]); //'one'
console.log(arr.length); //10
console.log(typeof arr); //object