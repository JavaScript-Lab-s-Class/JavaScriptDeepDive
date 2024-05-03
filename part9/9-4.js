1 + '2' //"12"

//숫자 타입
0 + ''    // "0"
- 0 + ''  // "0"
1 + ''    // "1"
- 1 + ''  // "-1"
NaN + ''    // "NaN"
Infinity + ''       //"Infinity"
- Infinity + ''    // "-Infinity"

//불리언 타입
true + ''   // "true"
false + ''  // "false"

//null 타입
null + '' //"null"

//undefined 타입
undefined + `` //"undefined"

    //심벌 타입
    (Symbol()) + `` //타입에러

    //객체 타입
    ({}) + ''
Math + ''
[] + ''
[10,20] + ''
(function (){}) + ''
Array + ''