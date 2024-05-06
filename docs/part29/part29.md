# 📖 29장. Math

---

**`Math` 객체는 수학 상수와 함수를 위한 프로퍼티와 메소드를 객체를 제공하는 빌트인 객체입니다.**

- **`Math`는 생성자 함수가 아닙니다.**
- **따라서 `Math`는 정적 프로퍼티와 정적 메서드만 제공합니다.**

<aside>

**🔥빌트인 객체**

- **ECMAScript 사양에 정의된 객체를 말하며, 애플리케이션 전역의 공통 기능을 제공** 합니다.
- 표준 빌트인 객체는 ECMAScript 사양에 정의된 객체이므로 자바스크립트 실행 환경(브라우저 또는 Node.js 환경)과 관계없이 언제나 사용할 수 있습니다.
- 표준 빌트인 객체는 전역 객체의 프로퍼티로서 제공됩니다.
→ **따라서 별도의 선언 없이 전역 변수처럼 언제나 참조할 수 있습니다.**

</aside>

<br/>

**1️⃣ Math 프로퍼티**

**`Math.PI`**

- 원주율 PI 값을 반환합니다.

```jsx
console.log(Math.PI); //3.141592653589793
```

**2️⃣ Math 메서드**

**`Math.abs()`**

- **인수로 전달되는 숫자의 절대값을 반환합니다.**
- **절대값은 반드시 0 또는 양수여야 합니다.**

```jsx
Math.abs(-1); //1
Math.abs('-1'); //1
Math.abs(''); //0
Math.abs([]); //0
Math.abs(null); //0
Math.abs(undefined); //NaN
Math.abs({}); //NaN
Math.abs('string'); //NaN
Math.abs(); //NaN

```

<aside>

**🔥Math.abs(null)은 왜 0으로 타입 변환되는가?**

- **JS에서는 자동 타입 변환(타입 강제 변환) 규칙에 의해 null이 숫자로 변환될 때 0으로 간주되기 때문에 0으로 타입 변환됩니다.**

</aside>

**`Math.round()`**

- **인수로 전달된 숫자의 소수점 이하를 반올림한 정수로 반환합니다.**

```jsx
Math.round(1.4); //1
Math.round(1.6); //2
Math.round(-1.4); // -1
Math.round(-1.6); // -2
Math.round(1); //1
Math.round(); //NaN
```

**`Math.ceil()`**

- **인수로 전달된 숫자의 소수점 이하를 올림한 정수를 반환합니다.**
- 소수점 이하를 올림하면 더 큰 정수가 됩니다.

**⚠️ 알아두어야 할점**

- **양수의 경우, 소수점 올림을 하면 +1이 되지만 음수일 경우, 소수점 올림 시 해당 소수점을 버립니다.**

```jsx
Math.ceil(1.4); //2
Math.ceil(1.6); //2
Math.ceil(-1.4); // -1
Math.ceil(-1.6); // -1
Math.ceil(1); //1
Math.ceil(); //NaN
```

**`Math.floor()`**

- **인수로 전달된 숫자의 소수점 이하를 내림한 정수를 반환합니다.**

**→`Math.ceil()`의 반대의 개념입니다.**

**⚠️ 알아두어야 할점**

- **양수인 경우, 소수점 이하를 때어 버린 다음 정수를 반환**합니다.
- 음수인 경우, 소수점 이하를 떼어 버린 다음 -1을 한 정수를 반환합니다.

```jsx
Math.floor(1.9); //1
Math.floor(9.1); //9
Math.floor(-1.9); // -2
Math.floor(-9.1); // -10
Math.floor(1); //1
Math.floor(); //NaN
```

**`Math.sqrt()`**

- 인수로 전달된 숫자의 제곱근을 반환합니다.

**→ 인수로 전달된 수의 `x * x` 수를 출력합니다.**

```jsx
Math.sqrt(9); //3
Math.sqrt(-9); //NaN
Math.sqrt(2); //1.414xxxxx
Math.sqrt(1); //1
Math.sqrt(0); //0
Math.sqrt(); //NaN
```

**`Math.random()`**

- 임의의 난수(랜덤 숫자)를 반환합니다.
- **`Math.random` 메서드가 반환한 난수는 0 ~ 1미만의 실수입니다. (0은 포함되지만 1은 포함되지 않습니다.)**

```jsx
Math.random(); //0 ~ 1 미만의 랜덤 실수

/*1 ~ 10사이의 랜덤 정수를 얻고 싶다면?
1) Math.random으로 0~1 미만의 실수를 구한 후, 10을 곱해 0 ~ 10미만의 랜덤 실수를 구합니다.
2) 0 ~ 10 미만의 랜덤 실수에 1을 더해 1 ~ 10범위의 랜덤 실수를 구합니다.
3) Math.floor로 1 ~ 10범위의 랜덤 실수의 소수점 이하를 떼어 버린 후, 정수를 반환합니다.
 */

const random = Math.floor((Math.random() * 10) + 1);
console.log(random); //1 ~ 10범위의 정수
```

**`Math.pow()`**

- 첫번째 인수를 밑으로, 두번째 인수를 지수로 거듭제곱한 결과를 반환합니다.

```jsx
Math.pow(2,8); //256
Math.pow(2,-1); //0.5
Math.pow(2); //NaN
```

**👨🏻‍🏫 추가 설명**

- **`Math.pow` 메서드 대신 ES7에서 도입된 지수 연산자를 사용하면 가독성이 좋습니다.**

```jsx
//ES7 지수 연산자
2 ** 2 ** 2; // 16
Math.pow(Math.pow(2, 2), 2); //16
```

**`Math.max`**

- **전달받은 인수 중에서 가장 큰 수를 반환합니다.**
- **인수를 전달되지 않으면 `-Infinity`를 반환합니다.**

```jsx
Math.max(1); //1
Math.max(1, 2); //2
Math.max(1, 2, 3); //3
Math.max(); //-Infinity
```

- **배열을 인수로 전달받아 배열의 요소 중에서 최대값을 구하려면 `Function.prototype.apply`메소드 또는 스프레드 문법을 사용해야 합니다.**

```jsx
//배열 요소 중에서 최댓값 취득
Math.max.apply(null,[1,2,3]); //3

//ES6 스프레드 문법
Math.max(...[1,2,3]); //3
```

<aside>

🔥**스프레드 문법**

- 배열이나 객체를 펼쳐서 개별 요소로 분리하는 문법입니다.
- **주로 배열과 객체의 결합, 복사, 함수 호출 시 인수 전달 등 다양한 상황에서 사용됩니다.**

</aside>

**스프레드 문법 예시**

**`…`연산자**를 사용하여 **배열이나 문자열을 개별 요소로 분해하여 결합**할 수 있습니다.

```jsx
const arr = [1,2,3];
const newArr = [...arr];
console.log(newArr); //[1,2,3]
```

**`Math.min`**

- 전달받은 인수 중에서 가장 작은 수를 반환합니다.
- 인수가 전달되지 않으면 `**Infinity**`를 반환합니다.

```jsx
Math.min(1); //1
Math.min(1,2); //1
Math.min(1,2,3); //1
Math.min(); //Infinity
```

- **배열을 인수로 전달받아 배열의 요소 중에서 최소값을 구하려면 `Function.prototype.apply` 메소드 또는 스프레드 문법을 사용해야 합니다.**

```jsx
//배열 요소 중에서 최소값 취득
Math.min.apply(null, [1, 2, 3]); //1

//ES6 스프레드 문법
Math.min(...[1, 2, 3]); //1
```
<br/>

### 📖 참고자료

[[JS] 📚 자바스크립트 Math 메소드 💯 총정리](https://inpa.tistory.com/entry/JS-📚-Math-메소드-✏️-정리)

[모던 자바스크립트 Deep Dive](https://www.aladin.co.kr/shop/wproduct.aspx?ItemId=251552545)

[[JavaScript] ... 스프레드(spread) 문법](https://jerryjerryjerry.tistory.com/154)