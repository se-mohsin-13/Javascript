"use strict";

console.log("Using break and continue in a for loop:");

for (let i = 1; i <= 5; i++) {
  if (i === 3) {
    console.log("Skipping number 3 using continue");
    continue; // skips the rest of the loop when i is 3
  }

  if (i === 5) {
    console.log("Stopping loop at number 5 using break");
    break; // exits the loop completely when i is 5
  }

  console.log("Current number:", i);
}
