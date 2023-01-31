const solution = (array) =>
  array
    .join("")
    .replaceAll("7", "a")
    .split("")
    .filter((v) => v === "a").length;