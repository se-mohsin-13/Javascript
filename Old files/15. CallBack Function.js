// A function that takes another function as a parameter
let name = "Mohsin";
function greetUser(name, callback) {
  console.log(`Hello, ${name}`);
  callback(); // calling the callback function
}

// A simple callback function
function sayGoodbye() {
  console.log("Goodbye!");
}

// Call greetUser and pass sayGoodbye as a callback
greetUser(name, sayGoodbye);

// real scenarios

setTimeout(function () {
  console.log("Executed after 2 seconds");
}, 2000);

let numbers = [1, 2, 3, 4];

// `forEach` takes a callback function
numbers.forEach(function (num) {
  console.log(num * 2);
});
