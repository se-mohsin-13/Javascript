/*
Maths
The following math operations are supported:

Addition +,
Subtraction -,
Multiplication *,
Division /,
Remainder %,
Exponentiation **.
The first four are straightforward, while % and ** need a few words about them.

Remainder %
The remainder operator %, despite its appearance, is not related to percents.

The result of a % b is the remainder of the integer division of a by b.
*/

"use strict";

// Math (Arithmetic) Operators
let a = 10;
let b = 3;

console.log("Math Operators:");
console.log("a + b =", a + b); // 13
console.log("a - b =", a - b); // 7
console.log("a * b =", a * b); // 30
console.log("a / b =", a / b); // 3.33
console.log("a % b =", a % b); // 1
console.log("a ** b =", a ** b); // 1000 (Exponentiation)
console.log("----------------------");

// Comparison Operators
console.log("Comparison Operators:");
console.log("a == b:", a == b); // false
console.log("a != b:", a != b); // true
console.log("a > b:", a > b); // true
console.log("a < b:", a < b); // false
console.log("a >= b:", a >= b); // true
console.log("a <= b:", a <= b); // false
console.log("----------------------");

// Logical Operators
let x = true;
let y = false;

console.log("Logical Operators:");
console.log("x && y =", x && y); // false
console.log("x || y =", x || y); // true
console.log("!x =", !x); // false
console.log("----------------------");

// Assignment Operators
let num = 5;

console.log("Assignment Operators:");
num += 3; // num = num + 3
console.log("num += 3:", num); // 8
num -= 2;
console.log("num -= 2:", num); // 6
num *= 2;
console.log("num *= 2:", num); // 12
num /= 3;
console.log("num /= 3:", num); // 4
num %= 3;
console.log("num %= 3:", num); // 1
console.log("----------------------");

// Bitwise Operators (Bonus)
console.log("Bitwise Operators:");
console.log("a & b =", a & b); // 10 & 3 = 2
console.log("a | b =", a | b); // 10 | 3 = 11
console.log("a ^ b =", a ^ b); // 10 ^ 3 = 9
console.log("~a =", ~a); // ~10 = -11
console.log("a << 1 =", a << 1); // 10 << 1 = 20
console.log("a >> 1 =", a >> 1); // 10 >> 1 = 5
console.log("----------------------");
