

let result = "5" - 2;
console.log("The result is: " + result);

let isValid = ("false" === "true"); // Non empty strings are truthy, so the comparison is false; fixed by changing the string to boolean
if (isValid) {
    console.log("This is valid!");
} else {
    console.log("This is not valid!"); // added this to accomodate for the expected output 'this is not valid'
}

let age = "25";
let totalAge = Number(age) + 5; // age is a string, so it needs to be converted to a number to add up correctly
console.log("Total Age: " + totalAge);

// Part 2

// Implicit type conversion
let implicitExample = 5 + "5";
console.log("Implicit conversion: " + implicitExample); // 5 is converted to a string to concatenate with "5"

// Explicit type conversion
let explicitExample = "5" * 1;
console.log("Explicit conversion: " + explicitExample); // "5" is converted to a number to multiply with 1

// Edge case
let edgeCase = "5" * "a";
console.log("Edge case: " + edgeCase); // "a" is not a number, so the result is NaN
