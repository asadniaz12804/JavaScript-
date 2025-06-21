// ✅ SUMMARY: All JavaScript Iteration Methods & Use Cases

// ======================================
// 1. FOR LOOP
// ======================================
// Traditional loop, full control over index and condition
for (let i = 0; i < 5; i++) {
    console.log("FOR loop value:", i);
}

// ======================================
// 2. WHILE LOOP
// ======================================
// Loop runs while condition is true
let i = 0;
while (i < 5) {
    console.log("WHILE loop value:", i);
    i++;
}

// ======================================
// 3. FOR...OF
// ======================================
// Loops over iterable values like arrays or strings
const fruits = ["apple", "banana", "grapes"];
for (const fruit of fruits) {
    console.log("FOR OF fruit:", fruit);
}

// ======================================
// 4. FOR...IN
// ======================================
// Loops over keys in objects or indices in arrays
const languages = {
    js: "JavaScript",
    py: "Python",
    cpp: "C++"
};
for (const key in languages) {
    console.log(`${key} is short for ${languages[key]}`);
}

// ======================================
// 5. FOREACH()
// ======================================
// Loops over arrays, does NOT return a value
const nums = [1, 2, 3];
nums.forEach((num) => {
    console.log("FOREACH num:", num);
});
// ❗ Cannot chain or return results like .map()

// ======================================
// 6. MAP()
// ======================================
// Transforms each item in array, RETURNS a new array
const doubled = nums.map((num) => num * 2);
console.log("MAP doubled:", doubled); // [2, 4, 6]

// Can also chain maps & filters
const chained = nums.map(n => n * 10).map(n => n + 1).filter(n => n > 20);
console.log("Chained Result:", chained);

// ======================================
// 7. FILTER()
// ======================================
// Filters array based on condition, RETURNS new array
const filtered = nums.filter((num) => num > 1);
console.log("FILTER result:", filtered); // [2, 3]

// ======================================
// 8. REDUCE()
// ======================================
// Reduces array to a single value (e.g., sum)
const sum = nums.reduce((acc, curr) => acc + curr, 0);
console.log("REDUCE sum:", sum); // 6

// Real use case: total cart price
const shoppingCart = [
    { item: "js", price: 1000 },
    { item: "py", price: 1200 }
];
const totalPrice = shoppingCart.reduce((acc, item) => acc + item.price, 0);
console.log("Cart Total:", totalPrice);
