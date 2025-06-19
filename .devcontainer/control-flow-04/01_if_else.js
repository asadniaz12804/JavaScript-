// Checking if user is logged in (boolean variable)
const isUserloggedIn = true;

// Temperature check
const temperature = 41;

// === checks both value AND data type
// if ( temperature === 40 ){
//     console.log("less than 50");
// } else {
//     console.log("temperature is greater than 50");
// }

// console.log("Execute"); // This will always run after the if-else block

// Comparison operators:
// <  : less than
// >  : greater than
// <= : less than or equal to
// >= : greater than or equal to
// == : equal in value only (loose equality)
// ===: equal in value and data type (strict equality)
// != : not equal
// !==: not equal in value or type

// ------------------------------
// Scope test inside if block

// const score = 200

// if (score > 100) {
//     let power = "fly";  // 'let' is block scoped — available only inside this if-block
//     console.log(`User power: ${power}`); // Output: User power: fly
// }

// console.log(`User power: ${power}`); 
// ❌ This would give an error: power is not defined outside the block

// ------------------------------
// One-line if statement (not recommended for multiple lines)

const balance = 1000;

// This line will run both console.logs because of comma-separated statements
// if (balance > 500) console.log("test"),console.log("test2");

// ------------------------------
// else-if chain (checks each condition in order)

if (balance < 500) {
    console.log("less than 500");
} else if (balance < 750) {
    console.log("less than 750");
} else if (balance < 900) {
    console.log("less than 900");
} else {
    console.log("less than 1200"); // ✅ This will run (because balance = 1000)
}

// ------------------------------
// Logical AND (&&) - all conditions must be true

const userLoggedIn = true;
const debitCard = true;
const loggedInFromGoogle = false;
const loggedInFromEmail = true;

// This won't print because 2==3 is false
if (userLoggedIn && debitCard && 2 == 3) {
    console.log("Allow to buy course");
}

// ------------------------------
// Logical OR (||) - any one condition must be true

if (loggedInFromGoogle || loggedInFromEmail) {
    // ✅ loggedInFromEmail is true, so this will run
    console.log("User logged in");
}
