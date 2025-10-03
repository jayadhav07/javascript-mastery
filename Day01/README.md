# 📌 Day 01 – Execution Context & Hoisting

## 📖 Topics Covered

- What is **Execution Context** in JavaScript
- Types:
  - Global Execution Context (GEC)
  - Function Execution Context (FEC)
- Phases:
  - Memory Creation Phase
  - Code Execution Phase
- **Hoisting**: How variables & functions are moved to the top before execution
- Difference in hoisting for `var`, `let`, `const`, and functions

---

## 📝 Notes

- Execution Context = environment in which JS code runs.
- Created in 2 phases:

  1. **Memory Phase** → variables allocated (`var = undefined`, `let/const = uninitialized`), functions stored as-is.
  2. **Code Phase** → code executed line by line, values assigned.

- **Call Stack** → manages execution contexts (LIFO).
- **Hoisting** → Variables & function declarations moved on top of their scope.

Example:

```js
console.log(a); // undefined
var a = 10;

console.log(b); // ReferenceError
let b = 20;

foo(); // Works
function foo() {
  console.log("Hello from foo");
}
```
