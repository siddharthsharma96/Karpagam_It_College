// Array of ingredients for making pancakes
let ingredients = ["flour", "eggs", "milk", "sugar"];

// // Method chaining example: filtering, mapping, and joining ingredients
// let result = ingredients
//   .filter(item => item !== "sugar")  // Remove sugar from the ingredients
//   .map(item => item.toUpperCase())   // Make each ingredient uppercase
//   .join(", ");                       // Combine them with commas

// console.log(result); // Output: "FLOUR, EGGS, MILK"

// Class for a calculator with methods for basic arithmetic operations
class Calculator {
  constructor(value = 0) {
    this.value = value;
  }
  // Method to add a number to the calculator's current value
  add(number) {
    this.value += number;
    return this; // Return the calculator object for chaining
  }
  // Method to subtract a number from the calculator's current value
  subtract(number) {
    this.value -= number;
    return this; // Return the calculator object for chaining
  }
  // Method to multiply the calculator's current value by a number
  multiply(number) {
    this.value *= number;
    return this; // Return the calculator object for chaining
  }
  // Method to divide the calculator's current value by a number
  divide(number) {
    this.value /= number;
    return this; // Return the calculator object for chaining
  }
  // Method to get the current result of the calculator's operations
  getResult() {
    return this.value;
  }
}
// Example of using the calculator class with method chaining
let result = new Calculator()
  .add(10)
  .subtract(2)
  .multiply(3)
  .divide(4)
  .getResult();
console.log(result); // Output: 6




// // Initial array of student grades
// const grades = [85, 92, 78, 96, 88];
// // Function to calculate the average grade
// const calculateAverage = function(grades) {
//     let total = 0;
//     // Loop through each grade
//     for (let i = 0; i < grades.length; i++) {
//         total += grades[i];
//     }
//     // Calculate average
//     return total / grades.length;
// }

// // Function to find the highest grade
// const findHighestGrade = function(grades) {
//     let highest = grades[0];
//     // Loop through each grade
//     for (let i = 1; i < grades.length; i++) {
//         if (grades[i] > highest) {
//             highest = grades[i];
//         }
//     }
//     return highest; // Return the highest grade
// }

// console.log(calculateAverage(grades)); // 87.8
// console.log(findHighestGrade(grades)); // 96


// Initial array of student grades
const grades = [85, 92, 78, 96, 88];

// Function to calculate the average of grades
const average = function(grades) {
    const total = grades.reduce((sum, grade) => sum + grade, 0);
    return total / grades.length;
}

// Function to find the highest grade
const highest = function(grades) {
    return grades.reduce((max, grade) => (grade > max ? grade : max), grades[0]);
}

// General function to calculate different properties of grades
// Takes a grades array and a logic function (average, highest, etc.)
const calculate = function(grades, logic) {
    return logic(grades);
}

console.log(calculate(grades, average)); // 87.8
console.log(calculate(grades, highest)); // 96


// const arr = [1, 2, 3, 4, 5];
// const output = arr.map(num => num + 10);
// console.log(output); // [11, 12, 13, 14, 15]


const arr = [1, 2, 3, 4, 5];
const output = arr.filter(num => num % 2);
console.log(output); // [1, 3, 5]


const numbers = [1, 2, 3, 4, 5];
const sum = numbers.reduce((total, currentValue) => total + currentValue, 0);
console.log(sum); // 15
