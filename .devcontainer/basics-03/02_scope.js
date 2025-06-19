// ===========================
// BLOCK SCOPE (let, const)
// ===========================

// Global scope
let a = 300;

// Block scope
if (true) {
    let a = 10;        // Block-scoped: this `a` exists only inside this block
    const b = 20;      // Also block-scoped

    console.log("INNER a:", a); // Output: 10
}

// This refers to the global `a`
console.log("OUTER a:", a); // Output: 300

// console.log(b); // ❌ Error: b is not defined outside the block



// ===========================
// FUNCTION SCOPE & NESTED FUNCTIONS
// ===========================

function one() {
    const username = "hitesh"; // Outer variable

    function two() {
        const website = "youtube"; // Inner variable
        console.log("Access outer:", username); // ✅ Accessible: "hitesh"
    }

    // console.log(website); // ❌ Error: website is only inside `two`

    two(); // Call inner function
}

one(); // Call outer function



// ===========================
// NESTED IF BLOCK + BLOCK SCOPE
// ===========================

if (true) {
    const username = "hitesh";

    if (username === "hitesh") {
        const website = " youtube";
        console.log("Nested if:", username + website); // ✅ Works
    }

    // console.log(website); // ❌ Error: website is inside inner if only
}

// console.log(username); // ❌ Error: username is block-scoped



// ===========================
// FUNCTION DECLARATION VS EXPRESSION (Hoisting)
// ===========================

// ✅ Function Declaration — HOISTED
console.log("addone:", addone(5)); // Output: 6

function addone(num) {
    return num + 1;
}



// ❌ Function Expression — NOT HOISTED
// This will throw an error if called before its definition
// Uncommenting below will give: ReferenceError
// console.log("addTwo:", addTwo(5)); 

const addTwo = function(num) {
    return num + 2;
};

console.log("addTwo:", addTwo(5)); // ✅ Output: 7 (if called after definition)
