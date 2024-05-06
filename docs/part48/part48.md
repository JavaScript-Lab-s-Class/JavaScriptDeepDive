# 📖 48장. 모듈

---


### 1️⃣ 모듈의 일반적 의미

- 모듈이란 **어플리케이션을 구성하는 개별적인 요소로서, 재사용 가능한 코드 조각** 을 의미합니다.
- 일반적으로 **모듈은 기능을 기준으로 파일 단위로 분리** 합니다.

**→ 이때, 모듈이 성립하려면 모듈은 자신만의 파일 스코프(모듈 스코프)를 가질 수 있어야 합니다.**

- **자신만의 파일 스코프를 갖는 모듈의 자산(모듈에 포함되어 있는 변수, 함수, 객체 등)은 비공개 상태** 입니다.
- **자신만의 파일 스코프를 갖는 모듈의 모든 자산은 캡슐화되어 다른 모듈에서 접근할 수 없습니다.**

**→ 하지만, 다른 어플리케이션이나 모듈에서 해당 모듈의 기능이 재사용해야 함으로 공개가 가능한 자산에 한정하여 선택적으로 공개가 가능합니다. 이를 `export`라고 합니다.**

**`export`된 모듈의 자산(변수, 메소드 등)**

- **다른 모듈에서 재사용할 수 있습니다.**
- **공개된 모듈의 자산을 사용하는 모듈을 모듈 사용자라고 합니다.**

→ 모듈 사용자는 공개된 자산 중 일부만 또는 전체를 선택하여 자신의 스코프 내로 불러들여 재사용할 수 있습니다.

**→ 이를 `import`라고 합니다.**

![1.png](images%2F1.png)

**👨🏻‍🏫 정리**

- **모듈은 어플리케이션과 분리되어 개별적으로 존재하다가, 필요에 따라 모듈에 의해 재사용됩니다.**
- **모듈은 기능별로 분리되어, 개별적인 파일로 작성됩니다.**

**→ 코드의 단위를 명확히 분리하여 어플리케이션을 구성할 수 있고, 재사용성이 좋아서 개발효율성과 유지보수성을 높일 수 있습니다.**

### 2️⃣ 자바스크립트와 모듈

- 자바스크립트는 **웹 페이지의 단순한 보조 기능을 처리하기 위한 제한적인 용도를 목적** 으로 만들어졌습니다.

**→ 다른언어와 비교하여 모듈 시스템을 지원하지 않는다는 단점이 있었습니다.**

- **자바스크립트는 `script` 태그를 사용하여 외부의 자바스크립트 파일을 로드할 수는 있었지만, 독립적인 파일 스코프를 갖지 못했었습니다.**

**→ 자바 스크립트 파일을 “여러 개의 파일로 분리하여 script 태그로 로드해도 분리된 자바스크립트 파일들은 결국 하나의 자바스크립트 파일 내에 있는 것처럼 동작” 했었습니다.**

**⚠️ 발생한 문제점**

- **모든 자바스크립트 파일은 하나의 전역으로 공유하게 되어, 분리된 자바스크립트 파일 내 전역 변수가 중복되는 등의 문제가 발생할 수 있습니다.**

**→ 이에 `CommonJs`와 `AMD`가 등장하였습니다.**

**🔎 어떤 문제가 발생되었는가?**

**1️⃣ 모듈 시스템을 지원하지 않았을때**

- **다른 사람의 코드를 발견하고, 그것을 그대로 내 코드로 가져와 적용할 때 변수 충돌이 발생하게 됩니다.**

**다른 사람의 코드**

- **window에 추가된 `$`나 `TweenMax`를 사용함**

```jsx
// 남의 코드들 먼저 불러오기
<script src="jquery.js"></script>
<script src="tweenmax.js"></script>
// 그걸 사용해 내 코드 작성
<script>
window.$
window.TweenMax
</script>
```

**내 코드**

```jsx
<script src="jquery.js"></script>
<script src="zepto.js"></script>
<script>
window.$ // ???
</script>
```

**내 코드에 다른 사람 코드를 가져와 적용할 때**

- **jquery에서도 `$`변수를 사용하고, zepcho도 `$`변수를 사용하기 때문에, 충돌이나서 하나하나씩 변경해줘야 합니다.**

```jsx
<script src="jquery.js"></script>
<script src="tweenmax.js"></script>
<script src="zerocho.js"></script>
<script>
  window.$
  window.TweenMax
  window.zerocho // 쓸데 없는데 window에 추가됨
</script>
<script>
  window.zerocho
</script>
```

<aside>
🔥 자바스크립트의 `Window` 객체

- `Window` 객체는 브라우저에서 열린 창을 의미합니다.
- 브라우저 안의 모든 요소들이 소속된 객체로, 최상위에 있기 때문에 어디서든 접근이 가능하다고 해서 “전역 객체”라고도 불립니다. (java의 `Object`와 같은 개념)
- 일반적으로 열고 있는 브라우저의 창을 의미하고, 해당 창을 제어하는 다양한 메서드들을 제공합니다.

</aside>

**🥅 현재의 js 모듈 시스템**

- **현재에도 `CommonJS`와 `AMD` 진영으로 나뉘게 되었고, 브라우저 환경에서 모듈을 사용하기 위해서는 `CommonJS` 또는 `AMD`를 구현한 모듈 로더 라이브러리를 사용해야 하는 상황이 되었습니다.**
- **자바스크립트 런타임환경인 `Node.js`는 `CommonJS`를 채택했고, 이후 계속 발전함에 따라 `CommonJS` 사양 기반의 별도의 모듈 시스템을 지원하게 되었습니다.**

**→ 즉, Node.js는 ECMAScript 표준사양은 아니지만 모듈 시스템을 지원합니다.**

**→ 따라서 Node.js환경에서는 파일별로 독립적인 파일 스코프(모듈 스코프)를 갖습니다.**

**`AMD`**

- **`Asynchronous Module Definition`으로 비동기적 모듈 선언이란 뜻입니다.**

**→ [RequireJS](https://requirejs.org/docs/api.html)에서 사용하고 있습니다.**

<aside>
🔥 RequireJS API

- 자바스크립트 간의 의존성을 관리하고, 동적 로딩을 지원하는 JS라이브러리 입니다.

</aside>

**`import`**

- **해당 라이브러리를 다운받아서 스크립트에 넣어두고, `import` 합니다.**

```jsx
<script src="require.js"></script>
```

**myModule.js 코드 작성**

- **내가 쓰고자 하는 남의 코드들(외부 js파일): define 함수의 첫번째 배열 인자에 명시**
- **콜백 함수에서 매개변수로 받은 내용 출력 : define함수의 두번째 인자에 명시**

```jsx
define(['jquery', 'zerocho'], function($, Z) {
  console.log($);
  console.log(Z);
  return {
    a: $,
    b: Z,
  }
});
```

**프로젝트 코드에 적용**

```jsx
require(['myModule', 'TweenMax'], function (my, T) {
  console.log(my.a); // jquery
  console.log(my.b); // zerocho
  console.log(T); // TweenMax
  console.log(jquery); // undefined 또는 에러
});
```

**`CommonJS`**

- **노드에서 채택한 방식이며, 보통 서버 사이드에서는 `CommonJS`를 많이 사용합니다.**

**→ 동기적 로딩방식을 의미합니다.**

- **브라우저쪽에서는 `AMD`를 사용하는 방식을 추천합니다.**

<aside>

🔥 왜 브라우쪽에서는 `AMD` 방식을 추천하는가?

1) 비동기 로딩: AMD는 모듈은 비동기적으로 로드할 수 있게 해줍니다. 
- 웹 페이지나 애플리케이션이 사용자에게 보여지기 전에 필요한 모든 스크립트를 미리 로딩할 필요가 없다는 것을 의미하며, 페이지 로드 시간을 단축시키고, 사용자의 경험을 향상시킵니다.

2) 페이지 성능 개선: 비동기 로딩은 필요한 스크립트만을 선택해서 로드하기 때문에, 브라우저 성능을 크게 개선할 수 있습니다.
- 사용자가 실제로 필요로 하는 기능의 코드만 로드되므로, 불필요한 리소스의 다운로드와 실행을 줄일 수 있습니다.

</aside>

**👩🏻‍🏫 결론**

- **브라우저 단에서는 비동기 로딩으로 페이지 로드 시간 단축과 페이지 성능 개선을 위해 `AMD` 방식을 사용하며, 서버 단에서는 파일 시스템이 접근 가능하고 로딩 시간이 큰 문제가 되지 않기 때문에 `CommonJS` 방식을 사용합니다.**

**myModule.js 코드 작성**

- **`require`(스크립트)로 불러와서 `module.exports` 로 모듈화하고 싶은 변수를 묶어주면 됩니다.**

```jsx

const $ = require('jquery');
const Z = require('zerocho');
module.exports = {
  a: $,
  b: Z,
};
```

**프로젝트 코드에 적용**

```jsx
const my = require('myModule');
const T = require('TweenMax');
console.log(my.a, my.b);
console.log(T);
```

**`UMD`**

- **`AMD`과 `CommonJS`를 쓰는 두 그룹으로 나누어져 호환이 되지 않아, 서로 어떤 모듈을 사용하든 동작이 되게 하도록 `UMD`가 등장했습니다.**
- **`UMD`는 하나로 정해진 코드라기 보다는 디자인 패턴에 가깝습니다.**

**→ `AMD`, `CommonJS`, 그리고 기존처럼 `window`에 추가하는 방식까지 모든 경우를 커버할 수 있는 모듈을 작성 하는 것 입니다.**

**myModule.js 코드 작성**

- `AMD`인 경우와, `CommonJS`인 경우 모두 즉시 실행함수 덕분에 factory 부분이 각자의 콜백 함수 또는 모듈 객체가 됩니다.
- 둘 다 아닌 경우(`**window**`)의 경우는 **`this`**가 **`window`**이기 때문에 **`root`**도 **`window`**가 되어, `**window.myModule**`에 값이 담기게 됩니다.

**→ 어떠한 환경에서도 `myModule.js`를 불러오면 모듈로 만들었던 `{ a: $, b: Z }`를 사용할 수 있습니다.**

```jsx
(function (root, factory) {
  if (typeof define === 'function' && define.amd) { // AMD
    define(['jquery', 'zerocho'], factory);
  } else if (typeof module === 'object' && module.exports) { // CommonJS
    module.exports = factory(require('jquery'), require('zerocho'));
  } else { // window
    root.myModule = factory(root.$, root.Z); 
  }
}(this, function($, Z) {
  return {
    a: $,
    b: Z,
  };
});
```

### 3️⃣ ES6 모듈(ESM)

- ES6에서는 **클라이언트 사이드 자바스크립트에서도 동작하는 모듈 기능을 추가 했습니다.**

**→ IE를 제와한 대부분의 브라우저에서 ES6 모듈을 사용 할 수 있습니다.**

**사용방법**

- **`script` 태그에 `type = “module”` 어트리뷰트를 추가하면 로드된 자바스크립트 파일은 모듈로써 동작합니다.**

**⚠️ 주의점**

- **일반적인 자바스크립트 파일이 아닌 ESM임을 명확히 하기 위해 파일 확장자는 `mjs` 를 사용할 것을 권장합니다.**

**HTML파일에 명시**

```html
<script type="module" src="app.mjs"></script>
```

**모듈 스코프**

- **ESM은 독자적인 모듈 스코프** 를 갖습니다.
- **ESM이 아닌 일반적인 자바스크립트 파일 은 `script` 태그로 분리해서 로드해도 독자적인 모듈 스코프 를 갖지 않습니다.**

**foo.js**

```jsx
//x 변수는 전역 변수이다.
var x = 'foo';
console.log(window.x); //foo
```

**bar.js**

```jsx
//x변수는 전역변수다. foo.js에서 선언한 전역 변수 x와 중복된 선언이다.
var x = 'bar';

//foo.js에서 선언한 전역 변수 x의 값이 재할당 되었다.
console.log(window.x); //bar
```

**index.html**

```html
<!DOCTYPE html>
<html>
<body>
<script src="foo.js"></script>
<script src="bar.js"></script>
</body>
</html>
```

**⚠️ 문제점**

- **HTML에서의 script 태그로 분리해서 로드된 2개의 자바스크립트 파일은 하나의 자바스크립트 파일 내에 있는 것처럼 동작합니다.**

**→ 따라서 `foo.js`에서 선언한 `x`변수 값이 뒤에 오는 `bar.js`의 `x`변수 값으로 재할당됩니다.**

**🔎 ESM은 파일 자체의 독자적인 모듈 스코프를 제공합니다.**

- **모듈 내의 `var` 키워드로 선언한 변수는 더는 전역 변수가 아니며, `window` 객체의 프로퍼티도 아닙니다.**

**foo.mjs**

```jsx
//x 변수는 전역 변수가 아니며, window 객체의 프로퍼티도 아니다.
var x = 'foo';
console.log(x); //foo
console.log(window.x); //undefined
```

**bar.mjs**

```jsx
//x 변수는 전역 변수가 아니며, window 객체의 프로퍼티도 아니다.
//foo.mjs에서 선언한 x변수와 스코프가 다른 변수이다.
var x = 'bar';
console.log(x); //bar
console.log(window.x); //undefined
```

**index.html**

- **모듈 내에서 선언한 식별자는 모듈 외부에서 참조할 수 없습니다.**

**→ 모듈 스코프가 다르기 때문입니다.**

```html
<!DOCTYPE html>
<html>
<body>
<script src="foo.mjs"></script>
<script src="bar.mjs"></script>
</body>
</html>
```

**foo.mjs**

```jsx
const x = 'foo';
console.log(x); //foo
```

**bar.mjs**

```jsx
console.log(x); //ReferenceError
```

**index.html**

```html
<!DOCTYPE html>
<html>
<body>
<script type = "module" src="foo.mjs"></script>
<script type = "module" src="bar.mjs"></script>
</body>
</html>
```

**`export` 키워드**

- 모듈은 독자적인 모듈 스코프를 갖습니다.

→ 따라서 모듈 내부에서 선언한 모든 식별자는 기본적으로 해당 모듈 내부에서만 참조할 수 있습니다.

- **모듈 내부에서 선언한 식별자를 외부에 공개하여 다른 모듈들이 재사용할 수 있게 하려면 `export` 키워드를 사용합니다.**
- **`export` 키워드는 선언문 앞에 사용합니다.**

**→ 변수, 함수, 클래스 등 모든 식별자를 `export`할 수 있습니다.**

**lib.mjs**

```jsx
//변수 공개
export const pi = Math.PI;

//함수의 공개
export function square(x) {
  return x * x;
}

//클래스의 공개
export class Person {
  constructor(name) {
    this.name = name;
  }
}
```

**👉🏻 선언문 앞에 매번 `export` 키워드를 붙이는 것이 번거롭다면, `export`할 대상의 객체로 구성하여 한번에 `export`할 수도 있음**

**lib.mjs**

```jsx
const pi = Math.PI;

function square(x) {
	return x * x;
}

class Person{
		constructor(name){
		this.name = name;
		}
}

//변수, 함수 클래스를 하나의 객체로 구성하여 공개
export { pi, squre, Person};
```

**`import` 키워드**

- 다른 모듈에서 공개한 식별자를 자신의 모듈 스코프 내부로 로드할려면 `**import**` 키워드를 사용합니다.
- **다른 모듈이 `export`한 식별자 이름으로 `import`해야 하며 `ESM`의 경우 파일 확장자를 생략할 수 없습니다.**

**app.mjs**

```jsx
//같은 폴더 내의 lib.mjs 모듈이 export한 식별자 이름으로 import한다.
//ESM의 경우, 파일 확장자를 생략할 수 없다.
import {pi,square,Person} from "./lib.mjs";

console.log(pi); //3.141592653589793
console.log(square(10)); //10
console.log(new Person('Lee')); //Person{ name: 'Lee'}
```

**app.index**

- `app.mjs`는 애플리케이션의 진입점에 반드시 **`<script>`** 태그로 로드해야 합니다.
- **하지만 `lib.mjs`파일은 `app.mjs`파일에 이미 `import`됨으로 진입점에는 불필요합니다.**

``` html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
</head>
<body>
<script type="module" src="app.mjs"></script>
</body>
</html>
```

**👉🏻 모듈이 `export`한 식별자 이름을 일일이 지정하지 않고, 하나의 이름으로 한번에 `import`하는 방법**

- **`import`되는 식별자는 `as` 뒤에 지정한 이름의 객체에 프로퍼티로 할당합니다.**

**app.mjs**

```jsx
//lib.mjs 모듈이 export한 모든 식별자를 lib 객체의 프로퍼티로 모아 import합니다.
import * as lib from './lib.mjs';

console.log(lib.pi); //3.141592653589793
console.log(lib.square(10)); //10
console.log(new lib.Person('Lee')); //Person{ name: 'Lee'}
```

- **모듈이 `export`한 식별자 이름을 변경하여 사용할 수 있습니다.**

```jsx
// lib.mjs 모듈이 export한 식별자 이름을 변경하여 import한다.
import {pi as PI, square as sq, Person as P} from "./lib.mjs";

console.log(PI); //3.141592653589793
console.log(sq(10)); //10
console.log(new P('Kim')); //Person{ name: 'Kim'}
```

- **모듈에서 하나의 값만 `export`한다면 `default` 키워드를 사용할 수 있습니다.**

**→ `default` 키워드를 사용하는 경우, 기본적으로 이름없이 하나의 값을 `export`합니다.**

**lib.mjs**

```jsx
export defalt x => x * x;
```

**👉🏻 default export(디폴트 내보내기)**

**👨🏻‍🏫 +) 추가 자료 - 디폴트로 내보내기, 명시적으로 내보내기**

1. **Default Export (디폴트 내보내기)**
- **한 모듈에서 딱 한 번만 사용할 수 있습니다**
- **각 모듈은 하나의 `default export`만을 가질 수 있습니다.**
- **`default export`는 모듈을 불러올 때 중괄호 `{}` 없이 불러올 수 있으며, 불러오는 쪽에서 원하는 이름으로 가져올 수 있습니다.**

**lib.mjs**

```jsx
export default function(){
	console.log("디폴트로 내보내기");
}
```

**main.js**

```jsx
import myFunmction from './lib.js';
myFunction(); //디폴트로 내보내기
```

**👉🏻 Named Export(명시적으로 내보내기)**

1. **Named Export(명시적으로 내보내기)**
- **한 모듈에서 여러 번 사용할 수 있습니다.**
- **하나의 모듈이 여러 개의 `named exports`를 가질 수 있습니다.**
- **`named export`는 모듈을 불러올 때 반드시 중괄호 `{}`를 사용해야 하며, 정확히 export된 이름으로 불러와야 합니다.**
- **`as` 키워드를 사용하여 이름을 변경할 수 있습니다.**

**lib.mjs**

```jsx
export myFunction(){
	console.log("명시적으로 내보내기");
}

export const myVariable = 123;
```

**main.js**

```jsx
import { myFunction, myVariable as variable } from './lib.js';
myFunction(); //명시적으로 내보내기
console.log(variable);
```

**⚠️ 주의점**

- **`default` 키워드를 사용하는 경우, `var`, `let`, `const` 키워드를 사용할 수 없습니다.**

**lib.mjs**

```jsx
export default const foo = () => {}; //에러
//export default () => {};
```

**app.mjs**

- **`default` 키워드와 함께 `export`한 모듈은 `{}`없이 임의의 이름으로 `import`합니다.**

**lib.mjs**

```jsx
export default x => x * x;
```

app.mjs

```jsx
import square from './lib.mjs';

console.log(square(3)); //9
```

### 📖 참고자료

[모던 자바스크립트 Deep Dive](https://www.aladin.co.kr/shop/wproduct.aspx?ItemId=251552545)

[모듈 | JavaScript로 만나는 세상](https://helloworldjavascript.net/pages/293-module.html)

[(JavaScript) AMD, CommonJS, UMD 모듈](https://www.zerocho.com/category/JavaScript/post/5b67e7847bbbd3001b43fd73#google_vignette)

[[JavaScript] Window 객체 및 관련 함수들](https://blog.naver.com/nuberus/221463252230)

[RequireJS](https://unlimitedcoding.tistory.com/3)