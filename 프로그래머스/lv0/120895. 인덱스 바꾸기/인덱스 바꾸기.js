const solution = (my_string, num1, num2) => {
  let arr = [...my_string];
  let answer = "";

  for (let i = 0; i < arr.length; i++) {
    if (i === num1) {
      arr[i] = my_string[num2];
    } else if (i === num2) {
      arr[i] = my_string[num1];
    }
  }
  answer = arr.join("");
  return answer;
};
