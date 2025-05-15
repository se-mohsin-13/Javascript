// Without "use strict"
x = 10; // No error, but this is bad practice (x is undeclared)
console.log("Without strict mode:", x);

// With "use strict"
("use strict");
x = 20;
console.log(`Use strict ${x}`);
