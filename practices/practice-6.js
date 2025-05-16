let arr = ["snake", "water", "gun"];
let userInput = prompt("Enter any 1 from --> (S, W, G) : ").toLowerCase();

// Convert short input to full form
let userChoice =
  userInput === "s"
    ? "snake"
    : userInput === "w"
    ? "water"
    : userInput === "g"
    ? "gun"
    : null;

if (userChoice) {
  let computerChoice = arr[Math.floor(Math.random() * arr.length)];
  alert("Computer chose: " + computerChoice);

  if (userChoice === computerChoice) {
    alert("It's a draw!");
  } else if (
    (userChoice === "snake" && computerChoice === "water") ||
    (userChoice === "water" && computerChoice === "gun") ||
    (userChoice === "gun" && computerChoice === "snake")
  ) {
    alert("You Win!");
  } else {
    alert("You Lose!");
  }
} else {
  alert("Enter valid characters (S, W, G)");
}
