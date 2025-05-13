// Length --> with escap sequence
console.log("Mohsin'".length);

// use ncludes method to check word is included ?
const data = "My name is Mohsin.".toLowerCase();
const check = "na".toLowerCase();

data.includes(check)
  ? console.log(`The result ** ${check} ** matched with data.`)
  : console.log(`Not found`);

//   extract the piece of the string

const text = "I live in a beautiful country.";
console.log(`Output : ${text.toUpperCase().slice(12)}`);

// change a  character on a specific index
let address = "Nothia Qadeen Peshawar.";
console.log(`Output : ${address.replace("Qadeen", "Qadeem")}`);

