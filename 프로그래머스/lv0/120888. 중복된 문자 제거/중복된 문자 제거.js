const solution = (my_string) => {
  let answer = "";
  const arr = my_string
    .split("")
    .filter((v, i) => my_string.split("").indexOf(v) === i);

  for (let i = 0; i < arr.length; i++) {
    answer += arr[i];
  }
  return answer;
};