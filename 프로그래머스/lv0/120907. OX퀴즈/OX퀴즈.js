function solution(quiz) {
  const answer = [];
  for (let i = 0; i < quiz.length; i++) {
    let a = quiz[i].split("=")[0];
    let c = parseInt(quiz[i].split("=")[1]);
    let d = 0;

    if (a.includes("+") === true) {
      a = a.split("+");
      d = parseInt(a[0]) + parseInt(a[1]);
    } else {
      a = a.split(" - ");
      console.log(a);
      d = parseInt(a[0]) - parseInt(a[1]);
    }
    if (d === c) {
      answer.push("O");
    } else {
      answer.push("X");
    }
  }
  console.log(answer);
  return answer;
}