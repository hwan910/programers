const solution = (n) => {
  const answer = [];
  for (let i = 2; i <= n; i++) {
    for (let j = 2; j < i; j++) {
      if (i % j === 0) {
        answer.push(i);
      }
    }
  }
  return [...new Set(answer)].length;
};