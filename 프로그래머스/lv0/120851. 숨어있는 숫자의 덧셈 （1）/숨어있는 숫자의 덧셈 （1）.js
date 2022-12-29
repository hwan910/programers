function solution(my_string) {
  let = regexp = /[0-9]/g;
  var answer = 0;
  const arr = my_string.match(regexp);
  for (let i = 0; i < arr.length; i++) {
    answer += parseInt(arr[i]);
  }

  return answer;
}
