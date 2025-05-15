// ✅ Primitive Data Types (Immutable, pass by value):
/*
    Data Type	Description
    String	    Represents textual data. Example: "Hello"
    Number	    Represents numbers (integer or floating point). Example: 42, 3.14
    BigInt	    Represents large integers beyond Number limits. Example: 12345678901234567890n
    Boolean	    Represents logical values: true or false.
    Undefined	A variable that has been declared but not assigned a value.
    Null	    Represents intentional absence of value.
    Symbol	    Unique and immutable value, often used as object keys.
*/
// ✅ Non-Primitive Data Types (Mutable, pass by references):
/*
    Data Type	Description
    Object	    Collection of key-value pairs. Example: {name: "Ali"}
    Array	    Ordered collection of values. Example: [1, 2, 3]
    Function	A block of code designed to perform a task. Example: function greet() {}
    Date	    Represents dates and times. Example: new Date()
    RegExp	    Regular expressions used for pattern matching. Example: /abc/
*/
// String
let name = "Mohsin"; // or 'Mohsin'
console.log(typeof name); // "string"

// Number
let age = 25;
let pi = 3.14;
console.log(typeof age); // "number"

// BigInt
let bigNumber = 1234567890123456789012345678901234567890n;
console.log(typeof bigNumber); // "bigint"

// Boolean
let isOnline = true;
console.log(typeof isOnline); // "boolean"

// Undefined
let address;
console.log(typeof address); // "undefined"

// Null
let data = null;
console.log(typeof data); // "object" (special case in JS)

// Symbol
let id = Symbol("uniqueId");
console.log(typeof id); // "symbol"

// Object
let person = {
  name: "Mohsin",
  age: 25,
  isStudent: true,
};
console.log(typeof person); // "object"

// Array
let fruits = ["apple", "banana", "mango"];
console.log(typeof fruits); // "object" (Arrays are objects in JS)

// Function
function greet() {
  return "Hello, World!";
}
console.log(typeof greet); // "function"

// Date
let today = new Date();
console.log(typeof today); // "object"

// RegExp (Regular Expression)
let pattern = /[a-z]/;
console.log(typeof pattern); // "object"
