const solution = (n) => {
  let answer = 0;
  let result = 1;
  for (let i = 1; result <= n; i++) {
    result = result * i;
    answer = i - 1;
  }
  return answer;
};