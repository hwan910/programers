function solution(keyinput, board) {
  var answer = [];
  let x = 0;
  let y = 0;
  let a = (board[0] - 1) / 2;
  let b = (board[1] - 1) / 2;
  console.log(`a:${a}, b:${b}`);
  console.log(`board: ${board[0]}, ${board[1]}`);
  for (let i = 0; i < keyinput.length; i++) {
    if (keyinput[i] == "left" && x > -a) {
      x = x - 1;
    }
    if (keyinput[i] == "right" && x < a) {
      x = x + 1;
    }
    if (keyinput[i] == "up" && y < b) {
      y = y + 1;
    }
    if (keyinput[i] == "down" && y > -b) {
      y = y - 1;
    }
  }
  console.log(x, y);

  if (a === 0 && x < 0 && x < -1) {
    x = -1;
  }
  if (a === 0 && x > 0 && x > 1) {
    x = 1;
  }
  if (b === 0 && y < 0 && y < -1) {
    y = -1;
  }
  if (b === 0 && y > 0 && y > 1) {
    y = 1;
  }

  if (a > 0 && x < 0 && x < -a) {
    x = -a;
  }
  if (a > 0 && x > 0 && x > a) {
    x = a;
  }
  if (b > 0 && y < 0 && y < -b) {
    y = -b;
  }
  if (b > 0 && y > 0 && y > b) {
    y = b;
  }
  answer = [x, y];
  console.log(`최종값:${answer}`);
  return answer;
}
