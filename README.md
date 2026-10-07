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
```

# JavaScript Arithmetic Library

This project is a simple JavaScript module that performs basic arithmetic operations (addition, subtraction, multiplication, and division). It includes a test suite built with Mocha and Chai to validate functionality.

## How to Run the Tests

To test this code on your local machine, ensure you have [Node.js](https://nodejs.org/) installed, and follow these steps:

1. **Clone or Download the Repository:**
   Download the project files and open your terminal (or command prompt) inside the project folder.

2. **Install Dependencies:**
   Because this project uses the Mocha and Chai testing frameworks, you need to install them locally. Run this command:
   ```bash
   npm install
