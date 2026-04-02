// 🧱 1. VARIABLES & DECLARATIONS
// 🟢 Easy
// Store your name, age, and city in variables
// Try reassigning a let variable
// Try reassigning a const → see error

let name = "Parnava Samanta";
let age = 19;
let city = "Bagnan";
console.log(name, age, city);

city = "Kolkata";
console.log(name, age, city);

// const school = "BHS";
// school = "JU";
// console.log(school);

// 🟡 Medium
// Create an object using const and modify its property
// Create an array using const and push new values

const insta = {
  ID: 190444,
  username: "dragslayr",
  DOB: "03/08/2006",
};
console.log(Object.entries(insta));

insta.username = "leonslayr";
console.log(Object.entries(insta));

const reach = [15, 16, 91];
console.log(reach);
reach[2] = 47;
console.log(reach);

// 🔴 HARD PROBLEM 1 (CONST REASSIGN)
// const arr = [1, 2, 3];

// arr = [4, 5, 6];

// console.log(arr);

// 👉 Questions:

// Does it run or error?
// If error → what type?
// 🔴 HARD PROBLEM 2 (FREEZE TRAP)
// const obj = { a: 1 };

// Object.freeze(obj);

// obj.a = 10;

// console.log(obj);

// 👉 Questions:

// Does value change?
// Any error or silent fail?
// 🔴 HARD PROBLEM 3 (REAL TRAP 🔥)
// const obj = {
//   a: 1,
//   b: { c: 2 }
// };

// Object.freeze(obj);

// obj.b.c = 100;

// console.log(obj);

// 👉 Questions:

// Will c change or not?
// Why?
// 🔴 HARD PROBLEM 4 (ARRAY FREEZE)
// const nums = [1, 2, 3];

// Object.freeze(nums);

// nums.push(4);

// console.log(nums);

// 👉 Questions:

// Will push work?
// Error or ignored?
// Final output?

// Reassign const	❌ Error
// Modify frozen obj	❌ No change (silent fail)
// Nested object	✅ Still changes
// Frozen array push	❌ No change
