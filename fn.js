// 🧠 Functions Practice (6–7 Questions)
// 1. Basic Function + Return

// Write a function add(a, b) that returns the sum.

// 👉 Test:

// add(5, 3) // 8
// 2. Default Parameters

// Create a function greet(name)

// If no name is passed → print "Hello Guest"
// Else → "Hello <name>"
// 3. Even Numbers in Array

// Write a function that takes an array and returns a new array of even numbers

// 👉 Example:

// getEven([1,2,3,4,5]) // [2,4]
// 4. Arrow Function Conversion

// Convert this into arrow function:

// function square(n) {
//   return n * n;
// }
// 5. Rest Operator

// Write a function sumAll(...nums) that returns sum of all numbers

// 👉 Example:

// sumAll(1,2,3,4) // 10
// 6. Closure (VERY IMPORTANT ⚠️)

// Create a function counter() that:

// returns another function
// each time inner function is called → increments count

// 👉 Example:

// let c = counter();
// c(); // 1
// c(); // 2

// (Hint: variable should be remembered)

// 7. Higher Order Function (HOF)

// Write a function applyOperation(a, b, fn)

// fn is another function (like add/multiply)

// 👉 Example:

// function multiply(x, y) {
//   return x * y;
// }

// applyOperation(2, 3, multiply) // 6

let add = (a, b) => a + b;

function greet(name = "Guest") {
  console.log("Hello " + name);
}

let getEven = function (arr) {
  let arr2 = [];
  for (const e of arr) {
    if (e % 2 === 0) arr2.push(e);
  }
  return arr2;
};

let square = (n) => n * n;

function sumAll(...data) {
  let sum = 0;
  for (const e of data) {
    sum += e;
  }
  return sum;
}

function counter() {
  let cnt = 0;
  return function () {
    return ++cnt;
  };
}

function multiply(x, y) {
  return x * y;
}

function applyOperation(a, b, fn) {
  return fn(a, b);
}
