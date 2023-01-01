function solution(hp) {
  var answer = 0;
  let a5 = hp % 5;
  let b = 0;

  if (hp === 1 || hp === 3 || hp === 5) {
    answer = 1;
  } else if (hp === 2 || hp === 4) {
    answer = 2;
  } else if (hp > 5) {
    if (a5 === 4 || a5 === 2) {
      b = 2;
    } else if (a5 === 0) {
      b = 0;
    } else {
      b = 1;
    }
    answer = Math.floor(hp / 5) + b;
  }
  return answer;
}
