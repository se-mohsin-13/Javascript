// create a var --> data & create a var --> save value ? Add both then tell me whhy ?
let user = "Mohsin";
let val = 22;
console.log(user + val);
// its because of string + number === string
// --------------------------------------
// use the type operator to find the dataType of the last output.

console.log(typeof (user + val));

// --------------------------------------
// create a const object and check wether it can change the value ?
const movieData = {
  name: "Mard",
  year: "90's",
  actor: "Amitabh Bachan",
};

console.log(movieData);
console.log(movieData.name);
console.log(movieData.year);
console.log(movieData.actor);

// check to change the value
movieData.actor = "Aitabh";
console.log(movieData.actor);

// it changes because the keys & values are dynamically can be handled, until we can change the Type of data or  re-declare with the same name
// --------------------------------------

const car = {
  brand: "Toyota",
  model: "Camry",
  year: 2020,
  displayInfo: function () {
    return `${this.brand} ${this.model}, ${this.year}, ${this.price}`;
  },
};

// Calling the method:
car["price"] = "30M";
console.log(car.displayInfo()); // "Toyota Camry, 2020"
// add new key & value

// --------------------------------------

// js program mini dictionary using an object in js
const checkWord = () => {
  const dictionary = {
    RAM: "Random Access Memory",
    ROM: "Read Only Memory",
    CPU: "Central Processing Unit",
    ALU: "Arithmetic Logic Unit",
    CU: "Control Unit",
  };

  let takeInput = prompt("Search below...").toUpperCase(); // Convert input to uppercase

  // Check if input is in dictionary
  if (dictionary[takeInput]) {
    alert(dictionary[takeInput]); // Display definition if found
  } else {
    alert("... Not Found ..."); // Display not found message if not found
  }
};

checkWord();
