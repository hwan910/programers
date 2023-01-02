let answer = "";

function solution(cipher, code) {
  const 찾아야할문자수 = cipher.length / code;
  for (let i = 1; i <= 찾아야할문자수; i++) {
    const 찾는문자 = cipher.charAt(code * i - 1);
    answer += 찾는문자;
  }
  return answer;
}