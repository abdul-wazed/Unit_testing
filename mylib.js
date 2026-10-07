// mylib.js
function add(a, b) {
    return a + b;
}

function subtract(a, b) {
    return a - b;
}

function multiply(a, b) {
    return a * b;
}

function divide(a, b) {
    if (b === 0) {
        throw new Error("ZeroDivisionError: Cannot divide by zero");
    }
    return a / b;
}

// Export the functions so they can be imported in other files
module.exports = {
    add,
    subtract,
    multiply,
    divide
};