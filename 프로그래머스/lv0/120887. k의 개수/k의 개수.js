const solution = (i, j, k) => {
  let test = "";
  for (let a = i; a < j + 1; a++) {
    test += `${a}`;
  }
  return test.split("").filter((v) => v === `${k}`).length;
};