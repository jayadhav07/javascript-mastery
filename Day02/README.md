# 📌 Day 02 – Functions & Higher Order Functions (HOF)

## 📖 Topics Covered

- Function Declarations vs Function Expressions vs Arrow Functions
- **First-Class Functions** (functions are treated like values)
- **Higher Order Functions (HOF)** – functions that take other functions as arguments or return them
- Callback functions
- Implementing custom `map`, `filter`, `reduce`

---

## 📝 Notes

- In JavaScript, **functions are first-class citizens** → they can be:

  - Assigned to variables
  - Passed as arguments
  - Returned from other functions

- **Higher Order Function**: A function that takes another function as an argument OR returns a function.
  Callback Function: A function passed as an argument to another function.
  Example:

```js
function hof(fn) {
  return function (x) {
    return fn(x) * 2;
  };
}
```
