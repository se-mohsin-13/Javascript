// Arithmetic Operators
let num1 = 10;
let num2 = 5;
console.log("Arithmetic Operators:");
console.log(`Addition: ${num1} + ${num2} = ${num1 + num2}`);
console.log(`Subtraction: ${num1} - ${num2} = ${num1 - num2}`);
console.log(`Multiplication: ${num1} * ${num2} = ${num1 * num2}`);
console.log(`Division: ${num1} / ${num2} = ${num1 / num2}`);
console.log(`Modulus: ${num1} % ${num2} = ${num1 % num2}`);
console.log(`Exponentiation: ${num1} ** ${num2} = ${num1 ** num2}`);

// Assignment Operators
let x = 20;
console.log("\nAssignment Operators:");
x += 5; // x = x + 5
console.log(`x += 5: ${x}`);
x -= 3; // x = x - 3
console.log(`x -= 3: ${x}`);
x *= 2; // x = x * 2
console.log(`x *= 2: ${x}`);
x /= 4; // x = x / 4
console.log(`x /= 4: ${x}`);
x %= 3; // x = x % 3
console.log(`x %= 3: ${x}`);

// Comparison Operators
let a = 10;
let b = "10";
console.log("\nComparison Operators:");
console.log(`a == b: ${a == b}`); // Equal to (loose equality)
console.log(`a === b: ${a === b}`); // Strict equality
console.log(`a != b: ${a != b}`); // Not equal to (loose inequality)
console.log(`a !== b: ${a !== b}`); // Strict inequality
console.log(`a > b: ${a > b}`); // Greater than
console.log(`a < b: ${a < b}`); // Less than
console.log(`a >= b: ${a >= b}`); // Greater than or equal to
console.log(`a <= b: ${a <= b}`); // Less than or equal to

// Logical Operators
let condition1 = true;
let condition2 = false;
console.log("\nLogical Operators:");
console.log(`condition1 && condition2: ${condition1 && condition2}`); // AND
console.log(`condition1 || condition2: ${condition1 || condition2}`); // OR
console.log(`!condition1: ${!condition1}`); // NOT

// Unary Operators
let value = 5;
console.log("\nUnary Operators:");
console.log(`++value: ${++value}`); // Increment before use  --> pre
console.log(`value++: ${value++}`); // Increment after use  --> post
console.log(`--value: ${--value}`); // Decrement before use   --> pre
console.log(`value--: ${value--}`); // Decrement after use   --> post
console.log(`typeof value: ${typeof value}`); // typeof

// Ternary Operator
let aGe = 18;
console.log("\nTernary Operator:");
let result = aGe >= 18 ? "Adult" : "Minor";
console.log(`You are an ${result}`);

// Bitwise Operators
let num3 = 5; // 0101
let num4 = 3; // 0011
console.log("\nBitwise Operators:");
console.log(`num3 & num4: ${num3 & num4}`); // AND
console.log(`num3 | num4: ${num3 | num4}`); // OR
console.log(`num3 ^ num4: ${num3 ^ num4}`); // XOR
console.log(`~num3: ${~num3}`); // NOT
console.log(`num3 << 1: ${num3 << 1}`); // Left shift
console.log(`num3 >> 1: ${num3 >> 1}`); // Right shift

// Spread Operator
let arr1 = [1, 2, 3];
let arr2 = [...arr1, 4, 5];
console.log("\nSpread Operator:");
console.log(`arr2: ${arr2}`);

// Destructuring Assignment
let person = { name: "John", age: 30 };
let { name, age } = person;
console.log("\nDestructuring Assignment:");
console.log(`Name: ${name}, Age: ${age}`);
