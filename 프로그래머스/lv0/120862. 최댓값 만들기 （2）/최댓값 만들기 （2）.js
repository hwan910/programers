function solution(numbers) {
  var answer = 0;
  var arr = [];
  for (let i = 0; i < numbers.length; i++) {
    for (let j = 0; j < numbers.length; j++) {
      if (i !== j) {
        arr.push(numbers[i] * numbers[j]);
      }
    }
  }
  answer = arr.sort((a, b) => b - a)[0];
  return answer;
}