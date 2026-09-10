// P1. Predict the output  (commit: "p1: equality predictions")
//
// For each line, write your prediction in the comment BEFORE running.
// Then run:  node p1_predict.js
// Wrong predictions are the point. For every miss, add one line
// explaining why, and commit.

console.log(1, 1 == "1"); // prediction: true / true
console.log(2, 1 === "1"); // prediction: false / false
console.log(3, 0 == ""); // prediction: true / true
console.log(4, 0 === ""); // prediction: false / false
console.log(5, "" == " "); // prediction: false -> 둘 다 문자열, 문자열 자체를 비교 / false
console.log(6, null == undefined); // prediction: true / true
console.log(7, null === undefined); // prediction: false / false
console.log(8, "4" - true); // prediction: false / 3 -> true가 1이니까..
console.log(9, "4" + 1); // prediction: true / 41 -> 문자열 4 + int 1
console.log(10, "4" * "2"); // prediction: 8 / 8
console.log(11, typeof "4"); // prediction: string / string
console.log(12, typeof null); // prediction: object / object
console.log(13, typeof []); // prediction: object / object
console.log(14, [1, 2] == [1, 2]); // prediction: true / false -> 내용 비교가 아니라 같은 객체를 가리키는지 비교
console.log(15, NaN === NaN); // prediction: true
