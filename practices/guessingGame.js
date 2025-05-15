let randomNumber;
let userInput;
do {
  randomNumber = Math.floor(Math.random() * 101);
  userInput = parseInt(prompt("Guess a Number : "));

  {
    userInput === randomNumber
      ? alert("🎉 Win! The number was " + randomNumber)
      : alert("❌ Try again! The number was " + randomNumber);
  }
} while (userInput !== randomNumber);
