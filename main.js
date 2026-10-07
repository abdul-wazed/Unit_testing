// main.js
const mylib = require('./mylib');

console.log("--- Executing mylib operations ---");
console.log(`5 + 3 = ${mylib.add(5, 3)}`);
console.log(`10 - 4 = ${mylib.subtract(10, 4)}`);
console.log(`6 * 7 = ${mylib.multiply(6, 7)}`);
console.log(`20 / 4 = ${mylib.divide(20, 4)}`);

console.log("\n--- Testing Division by Zero ---");
try {
    console.log(mylib.divide(10, 0));
} catch (error) {
    console.log(`Caught an error: ${error.message}`);
}