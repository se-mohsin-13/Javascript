// simple conditions
let marks = 20;
if (marks >= 10) {
  console.log("pass");
} else {
  console.log("fail");
}

// switch case
let score = 100;
switch (score) {
  case 10:
    console.log(`Score : ${score}`);
    break;
  case 20:
    console.log(`Score : ${score}`);
    break;
  case 30:
    console.log(`Score : ${score}`);
    break;

  default:
    console.log(`Score : ${score}`);
    break;
}
// ternary operators
let age = 20;
let result = age >= 18 ? "Adult" : "Minor";
console.log(result); // "Adult"
