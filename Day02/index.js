// callback function

setTimeout(() => {
  console.log("timer");
}, 5000);

function x(y) {
  console.log("x");
  y();
}

x(function y() {
  console.log("y");
});

// Y is the callback func and X is the HOF

// Function Declaration (hoisted)
function greet() {
  console.log("Hello!");
}
greet();

// Function Expression (not hoisted)
const sayHi = function () {
  console.log("Hi!");
};
sayHi();

// Arrow Function
const arrow = () => console.log("Arrow function!");
arrow();
