// Variable Scope and Hoisting
// var vs let vs const
//      1.Hoisting behavior
//      2.lobal, function, block scope
//      3. var -- can be update & re-declared
//         let -- can be update but not to be re-declared
//         const -- can not be updated & re-declared.

var name = "Alice";
console.log(name); // Alice

var name = "Bob"; // re-declaration allowed
console.log(name); // Bob

let age = 25;
console.log(age); // 25

age = 30; // allowed: updating
console.log(age); // 30

// let age = 35;   ❌ Error: can't redeclare in same scope

const country = "Pakistan";
console.log(country); // Pakistan

// country = "USA";   ❌ Error: can't change const
// const country = "UK"; ❌ Error: can't redeclare
