let users = ["Mohsin", "Amjad", "Amad", "Mani"];

// for loop
for (let user = 0; user < users.length; user++) {
  console.log(users[user]);
}

// for of
for (user of users) {
  console.log(user);
}

// for in
for (user in users) {
  console.log(users[user]);
}

// for Each
users.forEach((user) => {
  console.log(user);
});
