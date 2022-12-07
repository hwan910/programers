function solution(num_list,n) {
  var answer = [];
  for (let i = 0; i < num_list.length / n; i++) {
    let a = num_list.slice(n * i, n * (i + 1));
    answer.push(a);
  }

  return answer;
}