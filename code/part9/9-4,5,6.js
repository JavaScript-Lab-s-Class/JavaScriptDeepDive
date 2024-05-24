1 + '2' //"12"

`1 + 1 = ${1+1}`

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

  // 심벌 타입
  (Symbol()) + `` //타입에러

    //객체 타입
    ({}) + '' //"[object Object]"
Math + '' //"[object Math]"
[] + '' //""
[10,20] + '' //"10,20"
(function (){}) + '' //"function(){}"
Array + '' //"function Array(){[native code]}"