// =====================
// FOR...IN LOOP WITH OBJECT
// =====================

// An object with key-value pairs
const myObject = {
    js: 'javascript',
    cpp: 'C++',
    rb: "ruby",
    swift: "swift by apple"
};

// Loop through each key in the object
for (const key in myObject) {
    // `key` will be: js, cpp, rb, swift
    // myObject[key] accesses the value for each key
    // console.log(`${key} shortcut is for ${myObject[key]}`);
    // Output: js shortcut is for javascript, etc.
}

// =====================
// FOR...IN LOOP WITH ARRAY
// =====================

const programming = ["js", "rb", "py", "java", "cpp"];

// Loop through array indexes
for (const key in programming) {
    // `key` will be: 0, 1, 2, 3, 4 (indexes as strings)
    // programming[key] gives the value at that index
    // console.log(programming[key]);
    // Output: js, rb, py, java, cpp
}

// =====================
// FOR...IN DOES NOT WORK WITH MAP
// =====================

// Maps are iterable, but NOT with for...in
// for...in is designed for objects or arrays

// const map = new Map();
// map.set('IN', "India");
// map.set('USA', "United States of America");
// map.set('Fr', "France");
// map.set('IN', "India");

// ❌ This won't work — it won't iterate over Map values correctly
// for (const key in map) {
//     console.log(key);
// }

// ✅ Use for...of instead with Map (shown in earlier example)
