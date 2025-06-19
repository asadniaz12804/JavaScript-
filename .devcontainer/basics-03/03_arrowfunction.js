// ✅ An object with a method that uses `this`
const user = {
    username: "Asad",
    price: 999,

    welcomeMessage: function () {
        // `this` here refers to the current object `user`
        console.log(`${this.username} , welcome to website`);
        console.log(this); // shows the full user object
    }
};

// user.welcomeMessage(); // Uncomment to see output

// user.username = "sam";
// user.welcomeMessage(); // Now it will say "sam , welcome to website"

// console.log(this); // In a browser, refers to `window`; in Node.js, it's `{}`

// ❌ `this` inside a regular function (non-method)
function chai() {
    let username = "Asad";
    console.log(this.username); // undefined, `this` refers to global object, not chai function
}
// chai(); // Uncomment to test

// ❌ `this` inside a function expression
const chai2 = function () {
    let username = "Asad";
    console.log(this.username); // still undefined
};

// ✅ `this` inside an arrow function
const chai3 = () => {
    let username = "Asad";
    console.log(this); // arrow functions don't have their own `this`, it refers to outer lexical context
};

// chai3(); // Uncomment to test

// ✅ Arrow function returning a value

// ✅ Normal form with return keyword
// const addTwo = (num1, num2) => {
//     return num1 + num2;
// }

// ✅ Short form - implicit return
// const addTwo = (num1, num2) => num1 + num2;

// ✅ Short form using () to return an object
const addTwo = (num1, num2) => ({ username: "Asad" });

console.log(addTwo(3, 4)); // Output: { username: "Asad" }

// ❗ Important: If you want to return an object in arrow functions,
// wrap the object in parentheses ( ) — otherwise JavaScript thinks it's a block.

// ✅ Preview: Array iteration using `forEach()`
// const myArray = [2, 5, 3, 7, 8];
// myArray.forEach((val) => {
//     console.log(val);
// });
