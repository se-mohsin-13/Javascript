"use strict";

// String to Number Conversions
let str1 = "123";
let str2 = "45.67";
let str3 = "abc"; // Invalid number

console.log("String to Number:");

console.log("Using Number():", Number(str1));      // 123
console.log("Using parseInt():", parseInt(str2));  // 45
console.log("Using parseFloat():", parseFloat(str2)); // 45.67
console.log("Using unary + operator:", +str1);     // 123
console.log("Invalid string to number:", Number(str3)); // NaN
console.log("----------------------");

// Number to String Conversions
let num1 = 100;
let num2 = 99.99;

console.log("Number to String:");

console.log("Using String():", String(num1));     // "100"
console.log("Using toString():", num2.toString()); // "99.99"
console.log("Using + \"\":", num1 + "");           // "100" (concatenation)
console.log("----------------------");
