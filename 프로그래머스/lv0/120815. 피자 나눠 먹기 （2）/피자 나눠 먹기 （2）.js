const solution = (n) => {
  let v = 1;
  while ((6 * v) % n !== 0) {
    v += 1;
  }
  return v;
};