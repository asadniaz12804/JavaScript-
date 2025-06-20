// =====================
// FOR...OF LOOP
// =====================

// Can be used to iterate over iterable values like arrays, strings, maps, etc.

const arr = [1, 2, 3, 4, 5];

// Loop through each number in the array
for (const num of arr) {
    // console.log(num); // Uncomment to print: 1 2 3 4 5 (one per line)
}

// -------------------------

const greetings = "Hello world!";

// Loop through each character in the string
for (const greet of greetings) {
    // console.log(`Each char is ${greet}`);
    // Prints: Each char is H, then e, then l, etc.
}

// =====================
// MAPS in JavaScript
// =====================

const map = new Map(); // Create a new Map

// Set key-value pairs into the map
map.set('IN', "India");
map.set('USA', "United States of America");
map.set('Fr', "France");

// Duplicate key "IN" is ignored — Maps only keep unique keys
map.set('IN', "India");

// Print the entire map (Uncomment to view in console)
// console.log(map);

// Loop through Map using destructuring [key, value]
for (const [key, value] of map) {
    // console.log(key, ':-', value);
    // Output example: IN :- India
}

// =====================
// FOR...OF does NOT work directly on plain objects
// =====================

const myObject = {
    game1: 'NFS',
    game2: 'Spiderman'
};

// ❌ This will throw an error because objects are not iterable with for...of
// for (const [key, value] of myObject) {
//     console.log(key, ':-', value);
// }

// ✅ For objects, we will use `for...in` or Object.entries() instead
