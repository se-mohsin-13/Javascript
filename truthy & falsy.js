//  Falsy Values

// false
// 0
// -0
// 0n           // BigInt zero
// ""           // empty string
// null
// undefined
// NaN

// Rest all the values are Truthy

// "hello"     // non-empty string
// 42          // non-zero number
// []          // empty array
// {}          // empty object
// true        // boolean true
// new Date()  // date object


let values = [false, 0, -0, 0n, "", null, undefined, NaN, "JS", 123, [], {}, true];

values.forEach((val) => {
  if (val) {
    console.log(`${JSON.stringify(val)} is Truthy`);
  } else {
    console.log(`${JSON.stringify(val)} is Falsy`);
  }
});
