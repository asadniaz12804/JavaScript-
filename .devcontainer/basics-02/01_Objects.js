// ----------------------------------------
// 🧠 Concept: Singleton (Not used here directly)
// A singleton is a design pattern where only one instance of an object is created.
// You can create singletons using Object.create or class-based patterns.

// ----------------------------------------
// 🧠 Concept: Object.create
// Used to create objects with a specific prototype.
// Not used directly here, but mentioned for context.

// ----------------------------------------
// 🧠 Concept: Object Literals
// This is the standard way of defining objects in JavaScript.

const mySym = Symbol("key1")  // 🧠 Concept: Symbols
// A Symbol is a unique and immutable primitive value, often used as object keys.

const JsUser = {
    name: "Asad", // Standard key-value pair
    "full name": "Asad Choudhary", // Key with space, must be accessed using brackets
    [mySym]: "mykey1", // 🧠 Computed property using a Symbol
    age: 18,
    location: "Jaipur",
    email: "asad@google.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"] // Array stored inside the object
}

// ✅ Accessing object properties in different ways
// console.log(JsUser.email)        // Dot notation
// console.log(JsUser["email"])     // Bracket notation (needed for keys with spaces or symbols)
// console.log(JsUser["full name"]) // Bracket notation for space-containing key
// console.log(JsUser[mySym])       // Accessing a Symbol-keyed property

// 🔄 Updating a property
JsUser.email = "asad@chatgpt.com"

// ❄️ Freezing the object makes it immutable (uncomment to use)
// Object.freeze(JsUser)

JsUser.email = "asad@microsoft.com" // This won't work if object is frozen
// console.log(JsUser); // Will show updated or frozen state

// 🧠 Concept: Adding Methods to Object
// Functions can be stored as properties inside objects (called methods)

JsUser.greeting = function() {
    console.log("Hello JS user");
}

JsUser.greetingTwo = function() {
    // `this.name` refers to the 'name' property of JsUser
    console.log(`Hello JS user, ${this.name}`);
}

// 🔁 Calling object methods
console.log(JsUser.greeting());      // Output: "Hello JS user"
console.log(JsUser.greetingTwo());  // Output: "Hello JS user, Asad"
