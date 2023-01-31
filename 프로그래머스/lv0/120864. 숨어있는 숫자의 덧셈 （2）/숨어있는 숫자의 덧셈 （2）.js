const solution = (my_string) => {
  let answer = 0;
  const a = my_string
    .split(/[a-z]/gi)
    .map((v) => (v !== "" ? (answer += parseInt(v)) : (v = 0)));
  return answer;
};