// *Basic Function*

// function add(a, b) {
//     return a + b
// }
// console.log(add(5, 7))
// console.log(add(11, 39))
// console.log(add(3, 12))
// -----------------------------------------------------------------

// *Function with input limitations*

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

// *Function with constant value*

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

// *Fetch*
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

// *Template Literals and Embedded Expressions*

// const greeting = "Hello, and thank you for reaching out,"
// const firstName = "Frank";
// const lastName = "Marlin";

// console.log(`${greeting} ${firstName} ${lastName}.
// How can we help you today?`)
// -----------------------------------------------------------------

// *Different styles of Methods*

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

// *Arrow Functions Use Cases*

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

// *Arrays -- Push, Pop, Rearrange, Map, Filter, Reduce, Slice, forEach, etc.*

// const arrayOne = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// // arrayOne.push(12)
// // arrayOne.pop()
// // arrayOne.unshift(0)
// const arrayOneDoubled = arrayOne.map((n) => n * 2); // Creates a new array that is the original array modified.
// const arrayOneSliced = arrayOne.slice(1, 3); // Starts at index 1 (2), and stops before index 3 (3).
// const arrayOneEvenNumbers = arrayOne.filter((number) => {
//   // 'number % 2 === 0' means numbers divided by 2 with no remainder.
//   return number % 2 === 0;
// });
// const arrayOneOddNumbers = arrayOne.filter((number) => {
//   // A remainder of at least 1 indicates an odd number.
//   return number % 2 === 1;
// });
// const arrayOneSum = arrayOne.reduce((accumulator, currentValue) => {
//   // The accumulator accumulates the values starting at 0, and adds the current value of each index slot to the accumulated total.
//   return accumulator + currentValue;
// }, 0);

// const arrayTwo = [1, 2, 5, 1, 5, 6, 7, 8, 5, 1, 8];
// const arrayTwoUniques = arrayTwo.filter((element, index, array) => {
//   // Filtering out the repeated numbers and returning only the original values.
//   return array.indexOf(element) === index;
// });
// const arrayThree = [90, 104, 50, 87, 100, 39, 43];
// const arrayThreeBiggestNumber = arrayThree.reduce(
//   (maxValue, currentValue) =>
//     currentValue > maxValue ? currentValue : maxValue,
//   arrayThree[0]
// );
// -----------------------------------------------------------------

// *Ternary Operator (Conditional Expressions)*

// **Structure: condition ? expressionIfTrue : expressionIfFalse;**
// let isCold = true
// let weather = isCold ? 'Wear leggings and a scarf.' : 'No winter clothes today.'
// console.log(weather)

// function getDiscount(isMember) {
//     return isMember ? 0.5 : 0
// }
// console.log(getDiscount(true))
// console.log(getDiscount(false))

// let isLoggedIn = true
// console.log(isLoggedIn ? 'User is logged in.' : 'User is not logged in.')

// let age = 18
// let status = age >= 18 ? 'Adult' : 'Minor'
// console.log(status)

// let number = 10
// let result = number > 5 ? 'Greater than 5.' : (number < 5 ? 'Less than 5.' : 'Equal to 5.')
// console.log(result)
// -----------------------------------------------------------------

// *Switch / Break*

// const food = 'steak'

// switch (food) {
//     case 'lettuce':
//         console.log('Vegetable.')
//         break;
//     case 'chicken':
//         console.log('White meat.')
//         break
//     case 'steak':
//         console.log('This is the one! Will not log apple.')
//         break
//     case 'apple':
//         console.log('Fruit.')
//         break
//     default:
//         console.log('None of these.')
//         break
// }
// -----------------------------------------------------------------

// *.this*

// console.log(this) // Written globally, 'this' refers to the entire document 'Window'.

// const personOne = {
//     name: 'Corey',
//     greet: function () {
//         console.log('Hello, my name is ' + this.name + '.') // Within an object 'this' refers to the object 'person'.
//     }
// }
// personOne.greet()

// function showThis() {
//     console.log(this) // Within a function, 'this' refers to the entire document 'Window'.
// }
// showThis()

// function Person(name) {
//     this.name = name
// }

// const bob = new Person('Corey')
// console.log(bob.name) // Within a constructor function, 'this' refers to the constructor function 'Person'.

// const personTwo = {
//     name: 'Corey',
//     greet: () => {
//         console.log('Hello, my name is ' + this.name + '.') // Arrow functions do not have their own 'this' context. Output might not be as expected.
//     }
// }
// personTwo.greet()
// -----------------------------------------------------------------

// *Classes and Constructors*

// class Person {
//   constructor(name, age) {
//     this.name = name;
//     this.age = age;
//   }
//   greet() {
//     console.log(
//       `Hello! My name is ${this.name}, and I am ${this.age} years old.`
//     );
//   }
// }

// const corey = new Person("Corey", 31);
// corey.greet();

// class Employee extends Person {
//   constructor(name, age, jobTitle) {
//     super(name, age); // 'Super' inherits the arguments from the 'Person' constructor.
//     this.jobTitle = jobTitle;
//   }

//   work() {
//     console.log(`${this.name} is working as a ${this.jobTitle}.`);
//   }
// }

// const clark = new Employee("Clark", 31, "Developer");
// clark.work();

// class Tenure extends Employee {
//   constructor(name, age, jobTitle, yearsWorked, monthsWorked) {
//     super(name, age, jobTitle);
//     this.yearsWorked = yearsWorked;
//     this.monthsWorked = monthsWorked;
//   }

//   tenure() {
//     console.log(
//       `${this.name} has been a ${this.jobTitle} for ${this.yearsWorked} year(s) and ${this.monthsWorked} month(s) now.`
//     );
//   }
// }

// const ccc = new Tenure("CCC", 31, "Developer", 0, 1);
// const sam = new Tenure("Sam", 30, "UI/UX Designer", 10, 3);
// ccc.tenure();
// sam.tenure();

// class Calculator {
//   static add(x, y) {
//     return x + y;
//   }

//   static subtract(x, y) {
//     return x - y;
//   }
// }
// console.log(Calculator.add(5, 3));
// console.log(Calculator.subtract(5, 3));
// -----------------------------------------------------------------


// Async Await Functions.

// Set TimeOut.

// Event Delegation.

// Recursion.

// Closures.
