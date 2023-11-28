// Basic Function.

// function add(a, b) {
//     return a + b
// }
// console.log(add(5, 7))
// console.log(add(11, 39))
// console.log(add(3, 12))
// -----------------------------------------------------------------

// Function with input limitations.

// function subtract(a, b) {
//   if (typeof a === "number" && typeof b === "number") {
//     return a - b;
//   } else {
//     return "Please enter numbers only.";
//   }
// }
// console.log(subtract(10, 7))
// console.log(subtract(3, 5));
// console.log(subtract('5', '3'));
// -----------------------------------------------------------------

// Function with constant value.

// const a = 3.14;

// function multiply(a, b) {
//   if (typeof a === "number" && typeof b === "number") {
//     return a * b;
//   } else {
//     return "Please enter numbers or valid variables only.";
//   }
// }
// console.log(multiply(a, 10));
// console.log(multiply(a, 3));
// console.log(multiply("5", "3"));
// -----------------------------------------------------------------

// Fetch.
// (Adding checks such as 'if (!res.ok)' is a paramount practice to implement in all future Fetch blocks.)

// const URL = 'https://jsonplaceholder.typicode.com/posts'

// fetch(URL)
//     .then(res => {
//         if (!res.ok) {
//             throw new Error('Network response was not successful.')
//         }
//         return res.json()
//     })
//     .then(data => {
//         console.log(data)

// if (data.length > 0) {
//             console.log(data[2].title)
// }
// })
//     .catch(error => {
//     console.error('Error encountered within Fetch', error)
// })
// -----------------------------------------------------------------

// Template Literals and Embedded Expressions.

// const greeting = "Hello, and thank you for reaching out,"
// const firstName = "Frank";
// const lastName = "Marlin";

// console.log(`${greeting} ${firstName} ${lastName}.
// How can we help you today?`)
// -----------------------------------------------------------------

// Different styles of Methods.

// const dogObject = {
//     Breed: 'German Shepherd',
//     Weight: '110lbs',
//     Color: 'Sable',
//     Gender: 'Female',
//     bark() {
//         console.log("Woof!")
//     }
// }
// dogObject.bark()

// const catObject = {
//     breed: 'Serval',
//     Weight: '50lbs',
//     Color: 'Yellow and Spotted',
//     Gender: 'Male',
//     Meow: () => {
//         console.log('Meow!')
//     }
// }
// catObject.Meow()

// const myObject = {}

// myObject.myFunction = function () {
//     console.log('Adding a function to an empty object.')
// }
// myObject.myFunction()
// -----------------------------------------------------------------

// Arrow Functions Use Cases.

// const arrowFunction = () => {
//     return `An arrow function stored inside of a variable.
//     If using curly braces, you must write 'return'.
//     When calling this inside the console, don't forget the () after the variable name.`
// }
// console.log(arrowFunction())

// const arr = [1, 2, 3, 4, 5]
// const arrDoubled = arr.map(n => n * 2)
// console.log(arrDoubled)

// const title = document.querySelector("h1");

// title.addEventListener("click", (e) => {

//     if (e.target.tagName === 'H1') {
//         console.log(`Arrow functions are great for event listeners.
//         It's also a good habit to set your intended target.`);
//     }
// });
// -----------------------------------------------------------------

// Arrays -- Push, Pop, Rearrange, Map, Filter, Reduce, Slice, forEach, etc.

const arrayOne = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// arrayOne.push(12)
// arrayOne.pop()
// arrayOne.unshift(0)
const arrayOneDoubled = arrayOne.map((n) => n * 2); // Creates a new array that is the original array modified.
const arrayOneSliced = arrayOne.slice(1, 3); // Starts at index 1 (2), and stops before index 3 (3).
const arrayOneEvenNumbers = arrayOne.filter((number) => {
  // 'number % 2 === 0' means numbers divided by 2 with no remainder.
  return number % 2 === 0;
});
const arrayOneOddNumbers = arrayOne.filter((number) => {
  // A remainder of at least 1 indicates an odd number.
  return number % 2 === 1;
});
const arrayOneSum = arrayOne.reduce((accumulator, currentValue) => {
  // The accumulator accumulates the values starting at 0, and adds the current value of each index slot to the accumulated total.
  return accumulator + currentValue;
}, 0);

const arrayTwo = [1, 2, 5, 1, 5, 6, 7, 8, 5, 1, 8];
const arrayTwoUniques = arrayTwo.filter((element, index, array) => {
  // Filtering out the repeated numbers and returning only the original values.
  return array.indexOf(element) === index;
});
const arrayThree = [90, 104, 50, 87, 100, 39, 43];
const arrayThreeBiggestNumber = arrayThree.reduce(
  (maxValue, currentValue) =>
    currentValue > maxValue ? currentValue : maxValue,
  arrayThree[0]
);

console.log(arrayTwoUniques);
// .this.

// Classes and Constructors.

// Async Await Functions.

// Set TimeOut.

// Event Delegation.

// Recursion.
