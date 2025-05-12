// Function Declaration
function greet() {
  console.log("Hello from Function Declaration!");
}

// Function Expression
const greetExpression = function() {
  console.log("Hello from Function Expression!");
};

// Arrow Function
const greetArrow = () => {
  console.log("Hello from Arrow Function!");
};

// Anonymous Function (used inline)
setTimeout(function() {
  console.log("Hello from Anonymous Function after 1 second");
}, 1000);

// Immediately Invoked Function Expression (IIFE)
(function() {
  console.log("Hello from IIFE (Immediately Invoked Function Expression)!");
})();

// Constructor Function
function Person(name, age) {
  this.name = name;
  this.age = age;
}
const user = new Person("John", 30);
console.log("Person created:", user);

// Generator Function
function* countUp() {
  yield 1;
  yield 2;
  yield 3;
}
const counter = countUp();
console.log("Generator Function outputs:", counter.next().value);
console.log(counter.next().value);
console.log(counter.next().value);

// Async Function
async function fetchData() {
  return "Data fetched asynchronously!";
}
fetchData().then((data) => {
  console.log("Async Function output:", data);
});

// Callback Function
function sayHello(name, callback) {
  callback(name);
}
sayHello("Alice", function(name) {
  console.log("Hello from Callback Function, " + name + "!");
});

// Running all functions
greet();
greetExpression();
greetArrow();
