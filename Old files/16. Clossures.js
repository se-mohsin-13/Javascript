/*
Closures allow inner functions to access variables from an outer function even after the outer function has returned.

Why Are Closures Useful?
    They enable data encapsulation (private variables).
    They help in function factories.
    They're used in callbacks, event handlers, and module patterns.
*/

function outer() {
  let count = 0; // `count` is in the outer function scope
  console.log(`Orignal : ${count}`); // orignal value

  function inner() {
    count++; // inner function uses `count` from outer
    console.log(`Accessing : ${count}`); // Changing value
  }

  return inner;
}

const counter = outer(); // outer() returns inner, and assigns it to `counter`
counter();
counter();
counter();
