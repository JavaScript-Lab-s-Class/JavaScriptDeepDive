//선형 검색을 통해 배열(Array)에 특정 요소(target)이 존재하는지 확인한다.
//배열에 특정 요소가 존재하면, 특정 요소의 인덱스를 방환하고, 존재하지 않으면 -1을 반환한다.
function linearSerach(array, target) {
  const length = array.length;

  for (let i = 0; i < length; i++) {
    if (array[i] === target) return i;
  }
  return -1;
}

console.log(linearSerach([1, 2, 3, 4, 5, 6], 3)); //2
console.log(linearSerach([1, 2, 3, 4, 5, 6], 0)); //-1