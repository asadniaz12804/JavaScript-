// Checking if userEmail is truthy or falsy
const userEmail = [];

// In JavaScript, empty arrays ([]) are truthy
if (userEmail) {
    console.log("Got user email");  // ✅ This will run
} else {
    console.log("Don't have user email");
}

// ===========================
// Falsy values in JavaScript:
// false, 0, -0, 0n (BigInt), "", null, undefined, NaN

// ===========================
// Truthy values:
// "0", "false", " ", [], {}, function(){}

// Extra check: is the array actually empty?
if (userEmail.length === 0) {
    console.log("Array is empty"); // ✅ Will run because length is 0
}

// ===========================
// Check if an object is empty

const emptyObj = {};

if (Object.keys(emptyObj).length === 0) {
    console.log("Object is empty"); // ✅ Will run — no keys in object
}

// ===========================
// Nullish Coalescing Operator (??)
// Returns the first non-null / non-undefined value

let val1;

// Try each line one by one to test:

// val1 = 5 ?? 10        // 5 (because 5 is not null/undefined)
// val1 = null ?? 10     // 10 (null is ignored)
// val1 = undefined ?? 15 // 15 (undefined is ignored)
val1 = null ?? 10 ?? 20  // First non-null/undefined: 10

console.log(val1); // Output: 10

// ===========================
// Ternary Operator — shorthand if/else

const iceTeaPrice = 100;

// If condition is true, run first part; else, run second
iceTeaPrice <= 80
  ? console.log("less than 80")
  : console.log("more than 80"); // ✅ This runs because 100 > 80
