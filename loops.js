// for loop
// while loop
// do-while loop
// forin loop           for objects
// forof loop           for Arrays  --> iteration *
// forEach loop         for Arrays  --> iteration *

// for loop
let number = 1;
for (number; number <= 10; number++) {
  console.log(`Number : ${number}`);
}

// while loop
let age = 1;
while (age <= 10) {
  console.log(`Age : ${age}`);
  age++;
}

// do-while loop
let marks = 29;
do {
  console.log(`Your marks : ${marks}`);
  marks++;
} while (marks <= marks / 20);
{
}

// for in loop          (for objects in js)

const user = {
  id: 101,
  name: "John Doe",
  email: "john.doe@example.com",
  age: 28,
  gender: "Male",
  isActive: true,
  phone: "+1-555-1234",
  address: "123 Main St, New York, NY",
  joinedDate: "2023-01-15",
  role: "Administrator",
};

for (let key in user) {
  console.log(`Key : ${key} & value : ${user[key]}`);
}

// ------------------------

// for of loop          (for arrays in js)
const fruits = ["Apple", "Banana", "Mango", "Orange", "Grapes"];
for (let fruit of fruits) {
  console.log(`Fruite : ${fruit} & index is  ${fruits.indexOf(fruit)}`);
}

// ------------------------

// forEach loop          (for arrays in js)
const vegs = ["Carrot", "Broccoli", "Potato", "Spinach", "Cabbage"];

vegs.forEach((value, index) => {
  console.log(`Veg is : ${value} at ${index} possition`);
});
