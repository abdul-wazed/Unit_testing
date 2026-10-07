# JavaScript Arithmetic Library

This project is a simple JavaScript module that performs basic arithmetic operations (addition, subtraction, multiplication, and division). It includes a test suite built with Mocha and Chai to validate functionality.

## What does the test suite actually test?
The test suite verifies the mathematical correctness of the library's core functions. It ensures that standard inputs return the expected mathematical results. Additionally, it explicitly tests the error-handling behavior of the division operation to ensure that dividing a number by zero actively throws a `ZeroDivisionError` rather than failing silently or returning `Infinity`.

## Crucial Code Snippets

**1. Throwing the Error (in `mylib.js`)**
```javascript
if (b === 0) {
    throw new Error("ZeroDivisionError: Cannot divide by zero");
}
