function solution(array) {
  var answer = [];

  for (let i = 0; i < array.length; i++) {
    if (array[i] > array[i - 1]) {
      answer = [array[i], i];
    }
  }

  console.log(answer);
  return answer;
}