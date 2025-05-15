"use strict";

// Ternary Syntax: condition ? value_if_true : value_if_false

let age = 12;

// Using ternary to check eligibility
let result = age >= 18 ? "You are an adult." : "You are a minor.";
console.log(result); // Output: You are an adult.

let marks = 90;

// Nested ternary to check grade
let grade =
  marks >= 90
    ? "A+"
    : marks >= 80
    ? "A"
    : marks >= 70
    ? "B"
    : marks >= 60
    ? "C"
    : "Fail";

console.log("Your grade is:", grade); // Output: Your grade is: B
