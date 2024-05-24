if ('') console.log(x);

if ('') console.log('1');
if (true) console.log('2');
if (0) console.log('3');
if ('str') console.log('4');
if (null) console.log('5');

//2 4

//아래의 조건문은 모두 코드 블록을 실행한다.
if (!false) {
  console.log(false + ' is falsy value');
}

if (!undefined) {
  console.log(undefined + ' is falsy value');
}

if (!null) {
  console.log(null + " is falsy value");
}

if (!0) {
  console.log(0 + ' is falsy value');
}

if (!NaN) {
  console.log(NaN + ' is falsy value');
}

if (!'') {
  console.log('' + ' is falsy value');
}