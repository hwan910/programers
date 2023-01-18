const solution = (my_string) =>
  [...my_string]
    .filter((v) => /^[0-9]/.test(v))
    .sort((a, b) => a - b)
    .map((v) => parseInt(v));
