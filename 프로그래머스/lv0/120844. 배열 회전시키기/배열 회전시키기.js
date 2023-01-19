function solution(numbers, direction) {
  var answer = [];
  if (direction === "right") {
    answer = [numbers[numbers.length - 1], ...numbers];
    answer.pop();
  } else {
    answer = [...numbers, numbers[0]];
    answer.shift();
  }
  console.log(answer);
  return answer;
}