// Truthy and Falsy Values in JavaScript

// Falsy values - these values are considered false when converted to a Boolean
console.log(Boolean(false)); // Output: false (false is falsy)
console.log(Boolean(0)); // Output: false (0 is falsy)
console.log(Boolean(-0)); // Output: false (-0 is falsy)
console.log(Boolean(0n)); // Output: false (BigInt 0 is falsy)
console.log(Boolean("")); // Output: false (empty string is falsy)
console.log(Boolean(null)); // Output: false (null is falsy)
console.log(Boolean(undefined)); // Output: false (undefined is falsy)
console.log(Boolean(NaN)); // Output: false (NaN is falsy)

// Truthy values - these values are considered true when converted to a Boolean
console.log(Boolean(true)); // Output: true (true is truthy)
console.log(Boolean(1)); // Output: true (non-zero numbers are truthy)
console.log(Boolean("non-empty")); // Output: true (non-empty string is truthy)
console.log(Boolean([])); // Output: true (empty array is truthy)
console.log(Boolean({})); // Output: true (empty object is truthy)
console.log(Boolean(function () {})); // Output: true (functions are truthy)
console.log(Boolean(Infinity)); // Output: true (Infinity is truthy)
