// make an object --> name & marks --> use for loops (simple, for in) --> names, marks & both

let studentData = [
  { name: "Mohsin", marks: 87 },
  { name: "Ali", marks: 77 },
  { name: "Sikander", marks: 89 },
];

for (let student of studentData) {
  console.log(
    `Student Name : ${student.name} & Student Marks : ${student.marks}`
  );
}

studentData.forEach((student) => {
  for (let key in student) {
    console.log(
      `Student Name: ${student.name} & Student Marks: ${student.marks}`
    );
  }
});

studentData.forEach((student) => {
  console.log(
    `Student Name: ${student.name} & Student Marks: ${student.marks}`
  );
});

// ---------------------

// guess game
let inputNumber = 20;
let num = 10;
while (true) {
  if (num === inputNumber) {
    console.log("You Win");
    break;
  } else {
    console.log("You Loss");
    break;
  }
  num++;
}
