// Nullish Coalescing (??) returns the right-hand side value only if the left-hand side is null or undefined.

// Example 1: Using Nullish Coalescing
let username = null; // Left-hand side is null
let defaultName = "Guest"; // Default value

let nameToDisplay = username ?? defaultName; // username is null, so defaultName is used

console.log(nameToDisplay); // Output: "Guest"

// Example 2: Comparison with Logical OR (||)
let username2 = ""; // Left-hand side is an empty string
let displayName1 = username2 || "Guest"; // username2 is falsy (empty string), so "Guest" is used
let displayName2 = username2 ?? "Guest"; // username2 is not null or undefined, so empty string is used

console.log(displayName1); // Output: "Guest" (because "" is falsy in ||)
console.log(displayName2); // Output: "" (because "" is not null or undefined in ??)
