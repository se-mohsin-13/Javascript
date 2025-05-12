//  1. To Number

let str = "123";
let num = +str; // Unary plus
console.log(num); // 123
console.log(typeof num); // number

// 2. To String

let num2 = 456;
let str2 = num2 + ""; // Add empty string
console.log(str2); // "456"
console.log(typeof str2); // string

// 3. To Boolean

let val = "";
let bool = !!val; // Double NOT
console.log(bool); // false
console.log(typeof bool); // boolean
