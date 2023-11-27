// Basic Function.

// function add(a, b) {
//     return a + b
// }
// console.log(add(5, 7))
// console.log(add(11, 39))
// console.log(add(3, 12))

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

// Template Literals and Embedded Expressions.

// const greeting = "Hello, and thank you for reaching out,"
// const firstName = "Frank";
// const lastName = "Marlow";

// console.log(`${greeting} ${firstName} ${lastName}.
// How can we help you today?`)

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


// Arrow Functions.
// Arrays -- Push, Pop, Rearrange, etc.