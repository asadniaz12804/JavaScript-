const accountId=546
 // This is a constant variable, its value cannot be changed
// Variables in JavaScript can be declared using var, let, or const
// const: The value cannot be changed after declaration
// let: The value can be changed, but it is block-scoped
// var: The value can be changed and it is function-scoped
let accountEmail="asad@gmail.com"
var accountPassword="12345678" /* var is function-scoped, so it can be changed anywhere in the function prefer not to use*/
accountCity="Karachi"

//accountId=1234 we cant change the value of a constant variable
accountEmail="adil@gmail.com"
accountPassword="123456789"
accountCity="Lahore"
console.log([accountId, accountEmail, accountPassword, accountCity]);