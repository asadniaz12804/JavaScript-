// =============================
// ✅ for...of vs for...in Summary
// =============================

// -----------------------------
// for...of
// -----------------------------
// ✅ Works with: Arrays, Strings, Maps, Sets
// ✅ Returns: Direct values
// ❌ Does NOT work on plain objects

const arr = [10, 20, 30];
for (const value of arr) {
    console.log("for...of value:", value); // Output: 10, 20, 30
}

const greeting = "Hi!";
for (const char of greeting) {
    console.log("for...of char:", char); // Output: H, i, !
}

// -----------------------------
// for...in
// -----------------------------
// ✅ Works with: Objects and Arrays
// ✅ Returns: Keys (property names) or Indexes
// ❌ Does NOT work properly with Maps

const obj = { a: 1, b: 2 };
for (const key in obj) {
    console.log("for...in object:", key, obj[key]); // Output: a 1, b 2
}

const langs = ["js", "py"];
for (const index in langs) {
    console.log("for...in array:", index, langs[index]); // Output: 0 js, 1 py
}

// -----------------------------
// Map with for...of (✅ Correct)
// -----------------------------

const map = new Map();
map.set('IN', "India");
map.set('FR', "France");

for (const [key, value] of map) {
    console.log("Map for...of:", key, value); // Output: IN India, FR France
}

// -----------------------------
// Map with for...in (❌ Incorrect)
// -----------------------------
// This won't work as expected; Maps are not enumerable in the same way as objects

// for (const key in map) {
//     console.log(key); // ❌ Won't print keys of map
// }

// =============================
// ✅ Summary Table
// =============================
// | Loop       | Works On         | Returns        | Use Case                  |
// |------------|------------------|----------------|---------------------------|
// | for...of   | Arrays, Strings, Maps, Sets | Values | Iterate over values |
// | for...in   | Objects, Arrays   | Keys / Indexes | Iterate over keys         |
// | Map        | ❌ not for...in   | ✅ use for...of | Loop over key-value pairs |
