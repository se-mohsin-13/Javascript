"use strict";

let x = 5;
let y = 5;

console.log("Original values:");
console.log("x =", x);
console.log("y =", y);
console.log("----------------------");

// Post-Increment: value is used first, then increased
console.log("Post-Increment:");
console.log("x++ =", x++); // prints 5, then x becomes 6
console.log("After x++ => x =", x); // 6
console.log("----------------------");

// Pre-Increment: value is increased first, then used
console.log("Pre-Increment:");
console.log("++y =", ++y); // y becomes 6, then prints 6
console.log("After ++y => y =", y); // 6
console.log("----------------------");

// Post-Decrement: value is used first, then decreased
console.log("Post-Decrement:");
console.log("x-- =", x--); // prints 6, then x becomes 5
console.log("After x-- => x =", x); // 5
console.log("----------------------");

// Pre-Decrement: value is decreased first, then used
console.log("Pre-Decrement:");
console.log("--y =", --y); // y becomes 5, then prints 5
console.log("After --y => y =", y); // 5
console.log("----------------------");
