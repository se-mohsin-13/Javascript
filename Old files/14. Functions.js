/*
Functions in JavaScript
A function is a block of code designed to perform a particular task. Functions are one of the core building blocks of JavaScript, and they can be defined in multiple ways. Functions can take inputs (called parameters) and return outputs.
*/

/*
Types of Functions in JavaScript
1. Function Declaration (Named function)
2. Function Expression (Anonymous function)
3. Arrow Functions (ES6+ syntax)
4. Immediately Invoked Function Expression (IIFE)
5. Higher-Order Functions
*/
// --------------------------------------------------------------------------------------

// 1. Function Declaration (Named Function)
// A function declaration is a function defined with the `function` keyword and a name.
function greet(name) {
  return `Hello, ${name}!`; // Returns a greeting message
}

// calling a function
console.log(greet("Mohsin"));
// --------------------------------------------------------------------------------------

// 2. Function Expression (Anonymous Function)
// A function expression is a function that is assigned to a variable. It can be anonymous (without a name).
const greetExpression = function (name) {
  return `Hello, ${name}!`;
};

// Example of calling the function expression
console.log(greetExpression("Amjad")); // Output: "Hello, Alice!"

// --------------------------------------------------------------------------------------
// 3. Arrow Functions (ES6+ Syntax)
// Arrow functions are a concise way to write functions, especially useful for callbacks and anonymous functions.
const greetArrow = (name) => {
  return `Hello, ${name}!`;
};

// Shorter version of Arrow Function (with one expression)
const greetArrowShort = (name) => `Hello, ${name}!`;

// Example of calling the arrow functions
console.log(greetArrow("Ahsan")); // Output: "Hello, Bob!"
console.log(greetArrowShort("Awais")); // Output: "Hello, Charlie!"

// --------------------------------------------------------------------------------------

// 4. Immediately Invoked Function Expression (IIFE)
// An IIFE is a function that runs immediately after being defined. It helps in avoiding global scope pollution.
(function () {
  console.log("This function runs immediately!");
})();

// --------------------------------------------------------------------------------------

// 5. Higher-Order Functions
// A higher-order function is a function that takes another function as an argument or returns a function as a result.
function multiplyByTwo(x) {
  return x * 2;
}

console.log(multiplyByTwo(3));
