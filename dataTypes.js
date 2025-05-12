// ✅ Primitive Types in JavaScript (Passed by Value)
// There are 7 primitive types: NNBBSSU
// - Number
let age = 30;

// - Null
let data = null;

// - BigInt
let bigNumber1 = 1234567890123456789012345678901234567890n;
let bigNumber2 = BigInt(1234567890123456789012345678901234567890);

// - Boolean
let isActive = true;

// - String
let name = "Alice";

// - Symbol
let id = Symbol("uniqueId");

// - Undefined
let score; // declared but not assigned, so it's undefined

console.log(typeof age); // number
console.log(typeof data); // object (this is a known quirk in JS)
console.log(typeof bigNumber); // bigint
console.log(typeof isActive); // boolean
console.log(typeof name); // string
console.log(typeof id); // symbol
console.log(typeof score); // undefined

// --------------------------------------------------------------------
// ✅ Non-Primitive Types in JavaScript (Reference Types)
// Passed by Reference → Stored as references in memory
// Includes:
// - Object
let person = {
  name: "John",
  age: 25,
};

// - Array
let fruits = ["apple", "banana", "mango"];

// - Function
function greet() {
  return "Hello, world!";
}

// Output their types
console.log(typeof person); // object
console.log(typeof fruits); // object (arrays are a type of object)
console.log(typeof greet); // function

// Demonstrating pass-by-reference
let original = { value: 10 };
let copy = original;

copy.value = 99;
console.log(original.value); // 99 → original also changes!
