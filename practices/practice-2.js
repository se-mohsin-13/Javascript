let a = 10;
let b = 4;
//  define the exact output then check wether its correct ?

console.log(`a + b : ${a + b}`); // --> 14
console.log(`a - b : ${a - b}`); // --> 6
console.log(`a * b : ${a * b}`); // --> 40
console.log(`a / b : ${a / b}`); // --> 2.5
console.log(`a ** b : ${a ** b}`); // --> 10000
console.log(`a % b : ${a % b}`); // --> 2
console.log(`++a : ${++a}`); // --> 11
console.log(`a++ : ${a++}`); // --> 10
console.log(`--a : ${--a}`); // --> 9
console.log(`a-- : ${a--}`); // --> 10

// ---------------------------

// to find the age >= 10 & <= 20 ?

let userAge = 108;
if (userAge >= 10) {
  switch (userAge) {
    case 10:
      console.log(`User Age is : ${userAge}`);
      break;
    case 11:
      console.log(`User Age is : ${userAge}`);
      break;
    case 12:
      console.log(`User Age is : ${userAge}`);
      break;
    case 13:
      console.log(`User Age is : ${userAge}`);
      break;
    case 14:
      console.log(`User Age is : ${userAge}`);
      break;
    case 15:
      console.log(`User Age is : ${userAge}`);
      break;
    case 16:
      console.log(`User Age is : ${userAge}`);
      break;
    case 17:
      console.log(`User Age is : ${userAge}`);
      break;
    case 18:
      console.log(`User Age is : ${userAge}`);
      break;
    case 19:
      console.log(`User Age is : ${userAge}`);
      break;
    case 20:
      console.log(`User Age is : ${userAge}`);
      break;
    default:
      console.log(`User Age is : ${userAge} that is not lies between 10 & 20`);
      break;
  }
} else {
  console.log("User Age : ${userAge} should be between 10 & 20");
}

// ---------------------------
