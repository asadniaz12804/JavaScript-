// An array of programming languages as strings
const coding = ["js", "ruby", "java", "python", "cpp"];

// ======= Different Ways to Use forEach =======

// ✅ Method 1: Anonymous function inside forEach
// coding.forEach(function (val) {
//     console.log(val); // prints each language
// });

// ✅ Method 2: Arrow function
// coding.forEach((item) => {
//     console.log(item); // prints each language
// });

// ✅ Method 3: Named function
// function printMe(item) {
//     console.log(item);
// }
// coding.forEach(printMe); // you can directly pass function by name

// ✅ Method 4: Access value, index, and the entire array
// coding.forEach((item, index, arr) => {
//     console.log(item, index, arr);
// });
// Output example: js 0 [ 'js', 'ruby', 'java', 'python', 'cpp' ]

// ❗ Note:
// forEach() is mainly used for performing actions (like logging or side effects).
// It does NOT return a new array or value.
// If you try to store the result of forEach, it will always be undefined.
// Example:
// const result = coding.forEach(item => console.log(item));
// console.log(result); // ➤ undefined

// ============================================

// ✅ Array of Objects — each object contains language name and file extension
const myCoding = [
    {
        languageName: "javascript",
        languageFileName: "js"
    },
    {
        languageName: "java",
        languageFileName: "java"
    },
    {
        languageName: "python",
        languageFileName: "py"
    }
];

// ✅ Using forEach on array of objects
myCoding.forEach((item) => {
    console.log(item.languageName); // prints: javascript, java, python
    // You can also access item.languageFileName if needed
});
