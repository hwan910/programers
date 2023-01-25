const solution = (array, n) => {
  let answer = array[0];
  const arr = array.sort((a, b) => b - a);
  for (let i = 0; i < arr.length; i++) {
    if (Math.abs(arr[i] - n) <= Math.abs(answer - n)) {
      answer = arr[i];
    }
  }
  return answer;
};