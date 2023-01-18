function solution(box, n) {
  var newArr = [
    parseInt(box[0] / n),
    parseInt(box[1] / n),
    parseInt(box[2] / n),
  ];
  const answer = newArr[0] * newArr[1] * newArr[2];
  return answer;
}