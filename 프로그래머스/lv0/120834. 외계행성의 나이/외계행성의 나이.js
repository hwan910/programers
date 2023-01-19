
function solution(age) {
  const alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j"];
  var ageArr = [...String(age)];
  let answer = "";
  for (let i = 0; i < ageArr.length; i++) {
    answer += alphabet[Number(ageArr[i])];
  }
  return answer;
}

