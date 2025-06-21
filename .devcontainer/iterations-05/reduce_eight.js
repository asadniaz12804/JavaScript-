// ✅ Using reduce on simple array
const myNums = [1, 2, 3];

// Method 1: with function and debug log
// const myTotal = myNums.reduce(function (acc, currval) {
//     console.log(`acc: ${acc} and currval: ${currval}`);
//     return acc + currval;
// }, 0);

// Method 2: shorter arrow function version
const myTotal = myNums.reduce((acc, curr) => acc + curr, 0);
// acc: accumulator, curr: current value from array
// Starts with 0, adds each value in the array

console.log(myTotal); // ➤ Output: 6


// ✅ Real-world example: Shopping cart total calculation
const shoppingCart = [
    {
        itemName: "js course",
        price: 2999
    },
    {
        itemName: "py course",
        price: 999
    },
    {
        itemName: "mobile dev course",
        price: 5999
    },
    {
        itemName: "data science course",
        price: 12999
    },
];

// Using reduce to get total price from all cart items
const priceToPay = shoppingCart.reduce((acc, item) => acc + item.price, 0);
// acc: running total, item: current object from array
// item.price is added to acc during each loop

console.log(priceToPay); // ➤ Output: 22996
