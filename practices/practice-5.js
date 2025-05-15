// question 1
// create an array of Numbers and take input from the user and add numbers to this array

/*
    let numbers = [1, 2, 3, 4, 5];
      let userInput = parseInt(prompt("Enter Number : "));
      numbers.push(userInput);
      console.log(numbers);
*/

// question 2
// insert the numbers in to an array until num = 0

let nums = [];
let userInput;
do {
  userInput = parseInt(prompt("Enter a Number : "));
  nums.push(userInput);
} while (userInput !== 0);
console.log(nums);

// question 3
// filter a number divisible by 10 in an array

let numbers = [12, 14, 15, 17, 10, 30, 42, 50, 30, 20, 76, 45, 90];
let result = numbers.filter((number) => {
  return number % 10 === 0;
});

console.log(result);

// question 4
// create an array and take sqaure of each

let values = [12, 14, 15, 17, 10, 30, 42, 50, 30, 20, 76, 45, 90];
let squareArray = values.map((value) => {
  return value ** 2;
});

console.log(squareArray);

// question 5
// create an array and find the factorial of number n

let vals = [12, 14, 15, 17, 10, 30, 42, 50, 30, 20, 76, 45, 90];
let factorial = vals.reduce((accumulator, currentValue) => {
  return accumulator * currentValue;
});
console.log(factorial);
