// P3. Scores pipeline  (commit: "p3: scores pipeline")
//
// Pipeline: keep odd numbers -> double them -> sort descending -> keep the first half
//
// (a) Step by step. One variable per step, print the array after each step.
// (b) The whole pipeline as a single method chain. Print only the result.
// (c) Print scores once more at the end. Is it still the same? Why?
//
// You will need: filter, map, sort, slice, and Math.ceil.
// Not sure what one of them does? Look it up (MDN) before asking.

const scores = Array.from({ length: 20 }, () =>
  Math.floor(Math.random() * 101),
);
console.log("start:", scores);

// (a)
let oddnums = scores.filter((n) => n % 2 !== 0);
console.log(oddnums);

let doublenums = oddnums.map((n) => n * 2);
console.log(doublenums);

let sorted = doublenums.sort((a, b) => b - a);
console.log(sorted);
// (b)

let chained = scores
  .filter((n) => n % 2 !== 0)
  .map((n) => n * 2)
  .sort((a, b) => b - a);
console.log(chained);
// (c)
console.log(scores);
// filter와 map는 원본 배열을 수정하지 않기 때문
