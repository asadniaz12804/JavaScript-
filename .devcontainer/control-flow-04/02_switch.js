// A general structure of switch:
// switch (key) {
//     case value:
//         // code to run if key === value
//         break; // exits switch block
//     default:
//         // runs if no case matches
//         break;
// }

// Set a variable to test
const month = "march";

// The switch statement will compare the value of `month` to each case
switch (month) {
    case "jan":
        console.log("January");
        break; // stops checking further cases

    case "feb":
        console.log("February");
        break;

    case "march":
        console.log("March"); // ✅ This will run
        break;

    case "april":
        console.log("April");
        break;

    default:
        // Runs if none of the above cases match
        console.log("Default case matched");
        break;
}
