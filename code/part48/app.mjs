//같은 폴더 내의 lib.mjs 모듈이 export한 식별자 이름으로 import한다.
//ESM의 경우, 파일 확장자를 생략할 수 없다.
//import {pi,square,Person} from "./lib.mjs";

//lib.mjs 모듈이 export한 모든 식별자를 lib 객체의 프로퍼티로 모아 import합니다.
//import * as lib from './lib.mjs';

// lib.mjs 모듈이 export한 식별자 이름을 변경하여 import한다.
import {pi as PI, square as sq, Person as P} from "./lib.mjs";

console.log(PI); //3.141592653589793
console.log(sq(10)); //10
console.log(new P('Kim')); //Person{ name: 'Kim'}