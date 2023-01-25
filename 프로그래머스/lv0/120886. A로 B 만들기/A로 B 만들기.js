const solution = (before, after) => {
  let num = 0;
  for (let i = 0; i < before.length; i++) {
    [...before].sort()[i] === [...after].sort()[i] ? num++ : null;
  }
  return num === before.length ? 1 : 0;
};
