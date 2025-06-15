// 🧠 Concept: Object Creation Methods

// const tinderUser = new Object()
// Above is an older way to create an object (constructor-based)

// ✅ Modern and preferred way:
const tinderUser = {}

tinderUser.id = "123abc"
tinderUser.name = "Sammy"
tinderUser.isLoggedIn = false

// console.log(tinderUser); // Shows the created object with added properties

// 🧠 Nested Objects Example
const regularUser = {
    email: "some@gmail.com",
    fullname: {
        userfullname: {
            firstname: "hitesh",
            lastname: "choudhary"
        }
    }
}

// Accessing deeply nested property
// console.log(regularUser.fullname.userfullname.firstname);

// 🧠 Merging Objects

const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "a", 4: "b"}
const obj4 = {5: "a", 6: "b"}

// ❌ This just nests the objects inside obj3
// const obj3 = { obj1, obj2 }

// ✅ Object.assign(): merges multiple objects into a new one
// const obj3 = Object.assign({}, obj1, obj2, obj4)

// ✅ Modern Spread Operator (preferred and cleaner)
const obj3 = {...obj1, ...obj2}
// console.log(obj3); // Output: {1: 'a', 2: 'b', 3: 'a', 4: 'b'}

// 🧠 Array of Objects (Common in real-world APIs)
const users = [
    {
        id: 1,
        email: "h@gmail.com"
    },
    {
        id: 2,
        email: "a@gmail.com"
    },
    {
        id: 3,
        email: "b@gmail.com"
    },
]

// Accessing object inside an array
users[1].email  // "a@gmail.com"

// 🔍 Object Utility Methods
// console.log(Object.keys(tinderUser));    // Returns all keys in array form
// console.log(Object.values(tinderUser));  // Returns all values
// console.log(Object.entries(tinderUser)); // Returns [key, value] pairs

// ✅ Check if a property exists in the object
// console.log(tinderUser.hasOwnProperty('isLoggedIn')); // true

// 🧠 Destructuring Objects
const course = {
    coursename: "js in hindi",
    price: "999",
    courseInstructor: "hitesh"
}

// Destructuring with alias
const {courseInstructor: instructor} = course

// Accessing destructured value
console.log(instructor); // Output: "hitesh"
// console.log(courseInstructor); // ❌ Will give error because we renamed it to 'instructor'
