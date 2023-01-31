const solution = (array) =>
  array
    .join("")
    .split("")
    .filter((v) => v === "7").length;