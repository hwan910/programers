const solution = (order) => {
  var answer = 0;
  const arr = [...(order + "")].map((v) => {
    v === "3" || v === "6" || v === "9" ? (answer += 1) : answer;
  });
  return answer;
};