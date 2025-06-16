// Function to print each letter of the name "HITESH"
function sayMyName() {
    console.log("H");
    console.log("I");
    console.log("T");
    console.log("E");
    console.log("S");
    console.log("H");
}

// sayMyName(); // Uncomment to call the function and print the name


// Function to add two numbers and return the result
function addTwoNumbers(number1, number2) {
    // Alternate way: use a variable
    // let result = number1 + number2;
    // return result;

    return number1 + number2; // Directly returning the sum
}

// Storing the result of the function in a variable
const result = addTwoNumbers(3, 5);

// console.log("Result: ", result); // Uncomment to display result

// ----------------------------------------------------------
// Concept: Default Parameters and Conditional Logic

// Function to log a user in, with a default username "sam"
function loginUserMessage(username = "sam") {
    // If username is falsy (null, undefined, ""), ask to enter username
    if (!username) {
        console.log("Please enter a username");
        return; // Early return if input is invalid
    }
    return `${username} just logged in`; // String template to return login message
}

// console.log(loginUserMessage("hitesh")); // Call function with custom username
// console.log(loginUserMessage());         // Call function without argument (defaults to "sam")

// ----------------------------------------------------------
// Concept: Rest Operator (...num1)

// Function to calculate cart total (or just collect all arguments except first 2)
function calculateCartPrice(val1, val2, ...num1) {
    return num1; // Returns an array of remaining arguments
}

// console.log(calculateCartPrice(200, 400, 500, 2000)); // Output: [500, 2000]

// ----------------------------------------------------------
// Concept: Objects as Parameters

// Creating a user object
const user = {
    username: "hitesh",
    prices: 199
};

// Function that accepts any object and logs its properties
function handleObject(anyobject) {
    console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`);
}

// handleObject(user); // Pass object by variable

// Passing object directly in function call
handleObject({
    username: "sam",
    price: 399
});

// ----------------------------------------------------------
// Concept: Arrays and Accessing Elements

const myNewArray = [200, 400, 100, 600];

// Function that returns the second element of the array
function returnSecondValue(getArray) {
    return getArray[1]; // Index 1 = second element
}

// console.log(returnSecondValue(myNewArray)); // Output: 400

// Directly passing array in function call
console.log(returnSecondValue([200, 400, 500, 1000])); // Output: 400
