/*
An array in JavaScript is a special type of object used to store multiple values in a single variable.
let fruits = ["apple", "banana", "cherry"];

Key Features:
    Arrays are zero-indexed: first element is at index 0.
    Can store mixed data types. 
    Can grow or shrink dynamically.


Explanation of each method and its usage:

push(): Adds an element to the end of the array. Used when you need to add new items.
pop(): Removes the last element of the array. Used to remove the last item.
unshift(): Adds an element to the beginning of the array. Used when you need to add an item at the start.
shift(): Removes the first element of the array. Used to remove the first item.
indexOf(): Finds the index of the first occurrence of a specified value. Useful for locating an element’s position.
includes(): Checks if an array contains a specific value. Used for checking presence.
join(): Joins all elements of an array into a string with a separator. Useful for displaying array elements as a string.
map(): Creates a new array by applying a function to each element. Used for transformations without modifying the original array.
filter(): Creates a new array containing elements that satisfy a condition. Used to filter items based on criteria.
reduce(): Reduces the array to a single value (like concatenation or sum). Used for accumulating or summarizing array values.
*/

const fruits = ["Apple", "Banana", "Cherry"];

console.log(Array.isArray({})); // false
console.log(Array.isArray([])); // true

// Adding a new fruit to the end of the array
fruits.push("Date");
console.log(fruits); // ["Apple", "Banana", "Cherry", "Date"]

// Removing the last fruit from the array
fruits.pop();
console.log(fruits); // ["Apple", "Banana", "Cherry"]

// Adding a new fruit to the beginning of the array
fruits.unshift("Elderberry");
console.log(fruits); // ["Elderberry", "Apple", "Banana", "Cherry"]

// Removing the first fruit from the array
fruits.shift();
console.log(fruits); // ["Apple", "Banana", "Cherry"]

// Finding the index of "Banana"
console.log(fruits.indexOf("Banana")); // 1

// Checking if "Cherry" is in the array
console.log(fruits.includes("Cherry")); // true

// Joining the array into a string with a separator
console.log(fruits.join(", ")); // "Apple, Banana, Cherry"

// Creating a new array with each fruit in uppercase without changing the orignal array
const upperFruits = fruits.map((fruit) => fruit.toUpperCase());
console.log(upperFruits); // ["APPLE", "BANANA", "CHERRY"]

// Does not modify the original array.
// Returns a new array with elements that satisfy the condition.
// Common use cases: Filtering out odd/even numbers, finding items in a list, selecting users by age, etc.

// Filtering fruits with more than 5 characters
const longFruits = fruits.filter((fruit) => fruit.length > 5);
console.log(longFruits); // ["Banana", "Cherry"]

// Reducing the array to a single value (concatenating fruits)
const allFruits = fruits.reduce((acc, fruit) => acc + " " + fruit);
console.log(allFruits); // "Apple Banana Cherry"
