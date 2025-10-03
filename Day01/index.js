// Example 1: Hoisting with var
console.log(x); // undefined
var x = 5;

// Example 2: Hoisting with let/const
try {
  console.log(y);
} catch (e) {
  console.log("Error:", e.message); // Cannot access before initialization
}
let y = 10;

// Example 3: Function hoisting
greet(); // "Hello!"
function greet() {
  console.log("Hello!");
}
