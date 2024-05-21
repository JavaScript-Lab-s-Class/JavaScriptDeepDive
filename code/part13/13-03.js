var x = 'global';

function foo(){
  var x = 'local';
  console.log(x); //1번
}

foo()
console.log(x); //2번