// 🧠 ROUND 1: PREDICT OUTPUT (NO RUNNING ❌)
// 🔴 Q1
// console.log("5" + 3);
// console.log("5" - 3);
// 🔴 Q2
// console.log(true + false);
// console.log(true + 1);
// console.log(false + 1);
// 🔴 Q3
// console.log(null + 1);
// console.log(undefined + 1);
// 🔴 Q4 (VERY IMPORTANT 😈)
// console.log(typeof null);
// console.log(typeof []);
// console.log(typeof {});
// console.log(typeof function(){});
// 🔴 Q5 (TRUTHY / FALSY TRAP)
// if ("0") {
//   console.log("A");
// }

// if (0) {
//   console.log("B");
// }

// if ([]) {
//   console.log("C");
// }

// 🧠 ROUND 2: WRITE CODE
// 🟡 Q6

// Write function:

// function isEmpty(val) {
//   // return true if:
//   // null, undefined, ""
// }
// 🔴 Q7 (THINK HARD)

// Write:

// function check(val) {
//   // return "truthy" or "falsy"
// }

// Q1
// "53", 2
// Q2
// 1, 2, 1 ----- true 1, false 0
// Q3
// 1, NaN ----- undefined NaN, null 0
// Q4
// "object", "object", "object", "function"
// Q5
// "A", "C"

function isEmpty(v) {
  return v === null || v === undefined || v === "";
}
function check(v) {
  return v ? "truthy" : "falsy";
}
