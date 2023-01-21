const solution = (n, k) =>
  [...(n + "")].findIndex((v) => v === `${k}`) === -1
    ? -1
    : [...(n + "")].findIndex((v) => v === `${k}`) + 1;