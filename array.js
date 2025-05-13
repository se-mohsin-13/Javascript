let fruits = ["mango", "apple", "grapes", "peach"];
let vegs = ["potato", "chili", "garlic"];

// for each in an array
/*
  fruits.forEach((fruit) => {
  console.log(fruit);
});
*/
// for of in an array
/*
  for (let fruit of fruits) {
  console.log(fruit);
}
*/

// ✅ charAt returns a character from string; no array method here, just access
console.log(`Output : ${(fruits[0].charAt(0), fruits[1], fruits[2])}`);

// ✅ Returns a new string (does not modify original)
console.log(`Output : ${fruits.join("_")}`);

// 🔄 Removes last item, returns it – original array mutated
console.log(`Output : ${fruits.pop()}`, fruits);

// 🔄 Adds item to end – returns new length – original array mutated
console.log(`Output : ${fruits.push("jaman")}`, fruits);
// 🔄 Removes first item, returns it – original array mutated
console.log(`Output : ${fruits.shift()}`, fruits);

// 🔄 Adds to beginning, returns new length – original array mutated
console.log(`Output : ${fruits.unshift("grape")}`, fruits);

// ✅ Returns a new array (does not change original)
console.log(`Output : ${fruits.slice(1, 3)}`, fruits);

// 🔄 Removes/replaces items – original array mutated
console.log(`Output : ${fruits.splice(1, 1, "kiwi")}`, fruits);

// ✅ Returns index (no mutation)
console.log(`Output : ${fruits.indexOf("banana")}`);

// ✅ Returns boolean (no mutation)
console.log(`Output : ${fruits.includes("apple")}`);

// 🔄 Reverses in-place – original array mutated
console.log(`Output : ${fruits.reverse()}`);

// 🔄 Sorts in-place – original array mutated
console.log(`Output : ${fruits.sort()}`);

// ✅ Converts array to string (no mutation)
console.log(`Output : ${fruits.toString()}`);

console.log(`Output : ${fruits.concat(vegs)}`);

// ----------------------------------------

// ✅ 🔁 Returns new array – transforms each item (original unchanged)
console.log(`Output : ${fruits.map((f) => f.toUpperCase())}`);

// ✅ 🔁 Returns new array with filtered results (original unchanged)
console.log(`Output : ${fruits.filter((f) => f.length > 5)}`);

// ✅ 🔁 Returns first matching element (not mutated)
console.log(`Output : ${fruits.find((f) => f.startsWith("a"))}`);

// ✅ 🔁 Returns true if all pass test (original unchanged)
console.log(`Output : ${fruits.every((f) => typeof f === "string")}`);

// ✅ 🔁 Returns true if any pass test (original unchanged)
console.log(`Output : ${fruits.some((f) => f.includes("e"))}`);

// 🔁 Iterates each item (no return, doesn't modify array unless you do so manually)
console.log(`Output :`);
fruits.forEach((fruit, index) => console.log(`  Fruit ${index + 1}: ${fruit}`));




