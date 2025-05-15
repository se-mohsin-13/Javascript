// task 1

let userName = prompt("Enter Name : ");
let userAge = parseInt(prompt("Enter Age : "));
userAge >= 18
  ? alert("You are allowed to Drive.")
  : alert("You are not allowed to Drive.");

//   task 2

let reOpen = confirm("Would you want to Check Driving Status?");

function check() {
  let userName = prompt("Enter Name : ");
  let userAge = parseInt(prompt("Enter Age : "));
  userAge >= 18
    ? alert("You are allowed to Drive.")
    : alert("You are not allowed to Drive.");
}
reOpen === true ? check() : "false";

//   task 3
let reOpen = confirm("Would you want to Check Driving Status?");

const check = () => {
  let userName = prompt("Enter Name:");
  let userAge = parseInt(prompt("Enter Age:"));

  userAge < 0
    ? (console.error("❌ Age cannot be negative"),
      alert("Please enter a valid age."),
      check())
    : userAge >= 18
    ? alert("✅ You are allowed to drive.")
    : alert("🚫 You are not allowed to drive.");
};

reOpen ? check() : alert("Okay, maybe later!");
