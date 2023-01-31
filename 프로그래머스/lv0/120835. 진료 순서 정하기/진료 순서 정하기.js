const solution = (emergency) => {
  const arr = [...emergency];
  arr.sort((a, b) => b - a);
  for (let i = 0; i < emergency.length; i++) {
    emergency[i] = arr.findIndex((v) => v === emergency[i]) + 1;
  }
  return emergency;
};