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
// ^^^ Note that function constructors should be used in older environments / environments not ES6-supported. Use Class when possible as normal practice. ^^^

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

// *setTimeout*

// setTimeout(() => {
//     console.log("This basic message will appear after 2 seconds.")
// }, 2000)

// function greet() {
//     console.log('Greetings! I will appear after 3 seconds.')
// }
// setTimeout(greet, 3000)

// function welcome(name) {
//     console.log(`Welcome to our website, ${name}!`)
// }
// setTimeout(welcome, 1000, 'Corey')

// async function fetchData() {
//     console.log("And...")
//     setTimeout(() => {
//         console.log('Success!')
//     }, 2000)
// }
// fetchData()
// -----------------------------------------------------------------

// *Closures*

// function createGreeting(greeting) {
//   return function (name) {
//     console.log(`${greeting}, ${name}.`);
//   };
// }

// const greetHello = createGreeting("Hello");
// greetHello("Corey");

// const welcomeGreeting = createGreeting("Welcome");
// welcomeGreeting("Sam");

// function createCounter() {
//   let count = 0;

//   return function () {
//     count++;
//     console.log(count);
//   };
// }

// const myCounter = createCounter();
// myCounter();
// myCounter();

// function createMultiplier(factor) {
//   return function (number) {
//     return number * factor;
//   };
// }

// const double = createMultiplier(2);
// console.log(double(5));

// const triple = createMultiplier(3);
// console.log(triple(5));

// function delayedMessage(message, delay) {
//   setTimeout(function () {
//     console.log(message);
//   }, delay);
// }
// delayedMessage("This message will appear after 2 seconds.", 2000);

// for (let i = 1; i <= 9; i++) {
//     setTimeout(function () {
//         console.log(i)
//     }, i * 1000)
// }
// -----------------------------------------------------------------

// *Recursion*

// function factorial(n) {
//   if (n === 0 || n === 1) {
//     return 1;
//   }
//   return n * factorial(n - 1);
// }
// console.log(factorial(5)); // Output: 120 (5 * 4 * 3 * 2 * 1)

// function fibonacci(n) {
//   if (n <= 1) {
//     return n;
//   }
//   return fibonacci(n - 1) + fibonacci(n - 2);
// }
// console.log(fibonacci(6)); // Output: 8 (sequence: 0, 1, 1, 2, 3, 5, 8)

// function sumArray(arr) {
//   if (arr.length === 0) {
//     return 0;
//   }
//   return arr[0] + sumArray(arr.slice(1));
// }
// console.log(sumArray([1, 2, 3, 4, 5])); // Output: 15

// function countdown(n) {
//   if (n <= 0) {
//     console.log("Done!");
//     return;
//   }
//   console.log(n);
//   countdown(n - 1);
// }
// countdown(5); // Output: 5, 4, 3, 2, 1, "Done!"

// function greatestCommonDenominator(a, b) {
//   if (b === 0) {
//     return a;
//   }
//   return greatestCommonDenominator(b, a % b);
// }
// console.log(greatestCommonDenominator(48, 18)); // Output: 6

// function recursiveFactorial(n) {
//     if (n === 0) {
//         return 1;
//     } else {
//         return n * recursiveFactorial(n - 1)
//     }
// }

// console.log(recursiveFactorial(5)) // Output: 120 (5 * 4 * 3 * 2 * 1)
// console.log(recursiveFactorial(0)) // Output: 1
// console.log(recursiveFactorial(3)) // Output: 6 (3 * 2 * 1)
// -----------------------------------------------------------------

// *Promises*

// const simplePromise = new Promise((resolve, reject) => {
//   let condition = true;
//   if (condition) {
//     resolve("Promise resolved successfully!");
//   } else {
//     reject("Promise not fulfilled.");
//   }
// });

// simplePromise.then
//     ((message) => {
//         console.log(message);
//     }).catch((error) => {
//         console.error(error);
//     });

// function delay(ms) {
//     return new Promise((resolve, reject) => {
//         if (ms < 1000 || ms === undefined || ms === NaN) {
//             reject("Value cannot less than 1000, blank, or a non-number.")
//             return; // MAKE NOTE OF THE IMPORTANCE OF THAT SEMICOLON.
//         }
//         setTimeout(() => {
//             resolve(`Completed after ${ms} milliseconds.`)
//         }, ms)
//     });
// }

// delay(1000).then((message) => {
//     console.log(message)
// }).catch((error) => {
//     console.error(error);
// })

// function doubleAfter2Seconds(value) {
//   return new Promise((resolve) => {
//     setTimeout(() => {
//       resolve(value * 2);
//     }, 2000);
//   });
// }

// doubleAfter2Seconds(10)
//   .then((result) => {
//     console.log(result);
//     return doubleAfter2Seconds(result);
//   })
//   .then((result) => {
//     console.log(result);
//   });

// function aFunctionPromise(num) {
//    return new Promise((resolve, reject) => { // Never forget the 'return'!
//         const number = 5;

//         if (num === 5) {
//             resolve('The number is correct.')
//         } else {
//             reject('The number is incorrect.')
//         }
//     })
// }

// aFunctionPromise(4)
//     .then((result) => {
//     console.log(result)
//     })
//     .catch((error) => {
//     console.error(error);
//     })

// const aVariablePromise = new Promise((resolve, reject) => {
//   const number = 7;

//   if (number === 7) {
//     resolve(true);
//   } else {
//     reject(false);
//   }
// });
// aVariablePromise
//   .then((result) => {
//     console.log(result);
//   })
//   .catch((error) => {
//     console.error(error);
//   });

// const fakeApi = new Promise((resolve, reject) => {
//     const url = "https://jsonplaceholder.typicode.com/todos/1";

//     fetch(url)
//         .then(response)
//     if (response = !ok) {

//     }
// })
// -----------------------------------------------------------------

// *Destructuring*

// const numbers = [1, 2, 3]
// const [a, b, c] = numbers
// console.log(a, b, c) // Output: 1 2 3

// const array = ['first', 'second', 'third']
// const [, , thirdItem] = array
// console.log(thirdItem) // Output: third -- using commas to skip elements.

// const moreNumbers = [1]
// const [a, b = 2] = moreNumbers
// console.log(a, b) // Output: 1 2 -- Providing default values if array has fewer elements than expected.

// const person = { name: 'Alice', age: 25 }
// const { name, age } = person
// console.log(name, age) // Output: Alice 25

// const person = { name: 'Alice', age: 25 };
// const { name: personName, age: personAge } = person;
// console.log(personName, personAge) // Output: Alice 25 -- Assigning properties to new variable names.

// const person = { name: 'Alice' };
// const { name, age = 30 } = person;
// console.log(name, age) // Output: Alice 30 -- Providing default values for properties that might not exist.

// function introduce({ name, age }) {
//     console.log(`My name is ${name} and I am ${age} years old.`)
// }
// introduce({ name: 'Corey', age: 31 }) // Output: My name is Corey and I am 31 years old.

// function sum([a, b, c]) {
//     return a + b + c;
// }
// console.log(sum([1, 2, 3])); // Output: 6

// const user = {
//     name: 'Corey',
//     age: 31,
//     social: {
//         twitter: '@corey',
//         facebook: 'corey.fb'
//     }
// };

// const { social: { twitter, facebook } } = user;
// console.log(twitter, facebook); // Output: @corey corey.fb
// -----------------------------------------------------------------

// *Async Await Functions*

// async function fetchData() {
//     const url = "https://jsonplaceholder.typicode.com/todos/1";
//     const response = await fetch(url)
//     const data = await response.json();

//     console.log(data)
// }
// fetchData() // Basic async function.

// async function fetchData() {

//     try {
//         const url = "https://jsonplaceholder.typicode.com/todos/";
//         const response = await fetch(url)
//         const data = await response.json()
//         console.log(data)
//     } catch (error) {
//         console.error('Error fetching data:', error);
//     }
// }
// fetchData() // Async function with error handling.

// const fetchData = async () => {
//     const url = "https://jsonplaceholder.typicode.com/todos/1";
//     const response = await fetch(url);
//     const data = await response.json()
//     console.log(data)
// }
// fetchData() // Async function expression / arrow function.

// function delay(ms) {
//     return new Promise(resolve => setTimeout(resolve, ms));
// }

// async function runDelayed() {
//     console.log("Starting delay")
//     await delay(2000);
//     console.log("Delay completed")
// }
// runDelayed() // Using async with setTimeout.

// async function getUserData(userId) {
//     const url = `https://jsonplaceholder.typicode.com/users/${userId}`;
//     const response = await fetch(url);
//     const data = await response.json()
//     return userId;
// }

// async function showUserData() {
//     const user1 = await getUserData(1)
//     console.log(user1)
//     const user2 = await getUserData(2)
//     console.log(user2)
// }
// showUserData() // Using async with multiple promises.
// -----------------------------------------------------------------

// *Event Delegation*

// const eventList = document.querySelector('#eventList')

// eventList.addEventListener('click', (e) => {
//     if (e.target.tagName === 'LI') {
//       console.log("List item clicked:", e.target.textContent);
//       // This will work no matter how many more list items are added, because the event is added to the UL -- not the elements. Only one event listener is needed instead of many.
//     }
// })

// const button = document.querySelector('#addButton')
// const container = document.querySelector('#container')

// button.addEventListener('click', () => {
//     const newItem = document.createElement('div')
//     newItem.textContent = 'New Item'
//     container.appendChild(newItem)
// })
// Event listener added to create new elements.

// container.addEventListener('click', (e) => {
//     if (e.target.textContent === 'New Item') {
//         console.log('New Item clicked!')
//     }
// })
// Event listener added pertains to any and all new created elements.

// const parent = document.querySelector('#parent')
// const child = document.querySelectorAll('.child')

// parent.addEventListener('click', (e) => {
//     if (e.target && e.target.matches('.child')) {
//         console.log('Button clicked:', e.target.textContent)
//     }
// })
// Note that CLASS is used instead of ID when naming multiple elements the same name.
// -----------------------------------------------------------------

// *IIFE (Immediately-Invoked Function Expression)*

// (function () {
//     console.log("This function runs immediately.")
// })()

// (function (name) {
//     console.log(`Hello, ${name}!`)
// })('Corey')

// let result = (function () {
//     let secret = "Secret Code";
//     return `The secret is: ${secret}`
// })()
// console.log(result)

// let person = (function () {
//     let name = 'Corey'
//     let age = 32;

//     return {
//         getName: function () { return name; },
//         getAge: function () { return age; }
//     }
// })()
// console.log(person.getName())
// console.log(person.getAge())

// (async function () {
//     let data = await fetch("https://jsonplaceholder.typicode.com/todos/1");
//     let json = await data.json()
//     console.log(json)
// })()
// -----------------------------------------------------------------

// **************Test Questions****************

// For Loop

// let arr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
// for (let i = 0; i < arr.length; i++) {
//     console.log(i)
// }
// -----------------------------------------------------------------

// Recursion (Countdown)

// Closure

// Class and Constructor
// this

// const object = {
//     name: 'Corey',
//     age: 31,
//     car: 'Hyundai',
//     hair: 'Brown',
//     greeting: function() {
//         console.log(`Hello, my name is ${this.name}.`)
//     }
// }
// object.greeting()

// function Person(name, age) {
//     this.name = name;
//     this.age = age;
//     this.greet = function() {
//         console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`)
//         }
// }
// // Remember that lines are ended with a ';' in constructors -- not ':' and ','. Attach 'this' to all properties.
// const corey = new Person('Corey', 32)
// corey.greet()
// -----------------------------------------------------------------

// Switch and Break
// Fetch
// Destructuring
// Multiply all elements in array by 5.
// Use reduce
// Promises (variable and function)
// -----------------------------------------------------------------

// *Scenario Problems*

// Simulate a CPAP machine that maintains a constant output regardless of leakage.

// function rectify(output) {
//   const continuousOutput = 50;
//   let actualOutput = output;
//   const correction = continuousOutput - actualOutput;

//   if (actualOutput === 50) {
//     return "No leakage.";
//   } else {
//     return `Adjusted by ${correction}psi.`;
//   }
// }
// console.log(rectify(50));
// console.log(rectify(-10));
// console.log(rectify(25));
// -----------------------------------------------------------------

