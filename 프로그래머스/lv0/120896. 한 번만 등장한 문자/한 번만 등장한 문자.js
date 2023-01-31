const solution = (s) => {
  let answer = "";
  const arr = [...s].sort();
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] !== arr[i + 1] && arr[i] !== arr[i - 1]) {
      answer += arr[i];
    }
  }
  return answer;
};