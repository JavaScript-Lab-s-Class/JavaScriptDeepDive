var foo = 'Lee';

//이전 참조를 제거함. foo변수는 더 이상 'Lee'를 참조하지 않습니다.
//그러나 이는 효율적이지 않으며, 변수의 스코프를 좁게 만들어, 변수 자체를 소멸하는 것이 낫습니다.
foo = null;