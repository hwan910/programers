function solution(numbers) {
  const arr = [
    "zero",
    "one",
    "two",
    "three",
    "four",
    "five",
    "six",
    "seven",
    "eight",
    "nine",
  ];

  for (let i = 0; i < arr.length + 1; i++) {
    numbers = numbers.replaceAll(arr[i], i);
  }
  console.log(parseInt(numbers));
  return parseInt(numbers);
}