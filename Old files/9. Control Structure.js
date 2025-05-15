"use strict";

// 1. IF, ELSE, ELSE IF
let num = 10;

console.log("Conditional Statements:");
if (num > 0) {
  console.log("Positive number");
} else if (num < 0) {
  console.log("Negative number");
} else {
  console.log("Zero");
}
console.log("----------------------");

// 2. SWITCH
let day = 3;
console.log("Switch Statement:");
switch (day) {
  case 1:
    console.log("Monday");
    break;
  case 2:
    console.log("Tuesday");
    break;
  case 3:
    console.log("Wednesday");
    break;
  default:
    console.log("Another day");
}
console.log("----------------------");
