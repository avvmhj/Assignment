// // 1.Promises

// function fetchData(){
//   return new Promise((resolve, reject)=>{
//     setTimeout(() => {

//       const users =[
//         {id:1, name:'Avrila', age:20},
//         {id:2, name:'Sahira', age:30},
//         {id:3, name:'Sachina', age:25}
//       ];
//       resolve(users);
//   }, 2000);
// });
// }

// fetchData()
//   .then(data => {
//     console.log('Fetched Data:', data);
//   })
//   .catch(error => {
//     console.error('Error fetching data:', error);
//   });


//   // Closure
//   function createCounter() {

//     let count = 0;
//     return {
//         increment: () => count++,
//         getCount: () => count,
//     };
// }

// const counter = createCounter();
// counter.increment();
// console.log('Counter after increment:', counter.getCount());
// counter.increment();
// console.log('Counter after another increment:', counter.getCount()); 

// //Callbacks

// function processData(numbers, callback) {

//   return numbers.map(callback);
// }

// const numbers = [1, 2, 3, 4];
// const doubled = processData(numbers, num => num * 2);
// console.log('Doubled numbers:', doubled); 



// // Async/Await

// async function fetchDataAsync() {

//   try {
//       const data = await fetchData();
//       console.log('Fetched data with async/await:', data);
//   } catch (error) {
//       console.error('Error with async/await:', error);
//   }
// }

// (async () => {
//   await fetchDataAsync();
// })();


// //Array Manipulation: Map

// function doubleNumbers(numbers) {

//   return numbers.map(num => num * 2);
// }
// console.log('Doubled numbers:', doubleNumbers([1, 2, 3, 4])); 



// //Array Manipulation: Filter

// function filterNumbers(numbers) {

//   return numbers.filter(num => num >= 10);
// }
// console.log('Filtered numbers:', filterNumbers([5, 10, 15, 20])); 


// // Array Manipulation: Find

// function findNumber(numbers) {

//   return numbers.find(num => num > 15);
// }
// console.log('Found number:', findNumber([5, 10, 15, 20])); 



// //Array Manipulation: Reduce

// function sumNumbers(numbers) {

//   return numbers.reduce((sum, num) => sum + num, 0);
// }
// console.log('Sum of numbers:', sumNumbers([1, 2, 3, 4])); 


// //  Object Manipulation

// function transformUsers(users) {

//   return users.reduce((acc, user) => {
//       acc[user.id] = user;
//       return acc;
//   }, {});
// }

// const users = [
//   { id: 1, name: 'Alice', age: 25 },
//   { id: 2, name: 'Bob', age: 30 },
//   { id: 3, name: 'Charlie', age: 35 }
// ];
// console.log('Transformed users:', transformUsers(users)); 


//  Classes and Objects


// class Person {

//   constructor(name, age) {
//       this.name = name;
//       this.age = age;
//   }
//   describe() {
//       return `${this.name} is ${this.age} years old.`;
//   }
// }

// //  Inheritance
// class Student extends Person {

//   constructor(name, age, grade) {
//       super(name, age);
//       this.grade = grade;
//   }
//   study() {
//       return `${this.name} is studying.`;
//   }
// }

// const person = new Person('Mike Doe', 40);
// console.log(person.describe()); 

// const student = new Student('Miki Doe', 20, 'A');
// console.log(student.describe());
// console.log(student.study());   

// // Complex Array Manipulation

// function getUniqueHobbies(users) {

//   return [...new Set(users.flatMap(user => user.hobbies))];
// }

// const hobbyUsers = [
//   { name: 'Alice', hobbies: ['reading', 'swimming'] },
//   { name: 'Bob', hobbies: ['reading', 'cycling'] },
//   { name: 'Charlie', hobbies: ['swimming', 'cycling'] }
// ];
// console.log('Unique hobbies:', getUniqueHobbies(hobbyUsers)); 


// 1. Why are promises used in JavaScript? Explain the advantages of using promises over
// traditional callback functions.


// Promises in JavaScript make handling asynchronous operations much more manageable 
// compared to using traditional callback functions. They help avoid "callback hell,"
// where code becomes deeply nested and hard to read. With promises, you can chain operations using then and catch,
// which keeps the code clean and linear. This also makes error handling simpler, 
// as you can manage all errors in one place with the catch method. Overall, promises lead to more readable, 
// maintainable, and reliable code,making it easier to work with complex asynchronous tasks.

// 2. What is a closure in JavaScript? Provide an example.

// A closure in JavaScript is like a function that "remembers" the environment where it was created. 
// Even after the outer function has finished running, the inner function can still access and use the variables from that outer function.
// This means the inner function keeps a sort of memory of the outer function's variables, allowing it to use them later on.

// function createCounter() {
//   let count = 0;

//   return function() {
//       count++;
//       return count;
//   };
// }

// const counter = createCounter();
// console.log(counter()); 
// console.log(counter()); 
// console.log(counter());

// 3. What is a callback function and why is it used in JavaScript?

// A callback function in JavaScript is a function that's passed as an argument to another function and runs once that function completes its task.
// Callbacks are essential for handling asynchronous operations like file reading, API requests, or user interactions. 
// They allow JavaScript programs to continue executing other tasks while waiting for asynchronous tasks to finish, 
// ensuring responsiveness and efficiency in applications.

// 4. What are async/await in JavaScript and how do they improve asynchronous programming?

// Async/await are tools in JavaScript that make handling promises easier. They let you write asynchronous code in a more straightforward,
//  synchronous style, which makes your code easier to read and manage. With async, you mark a function as returning a promise,
//   and await lets you pause the code until that promise finishes, making it easier to work with async operations.



//5. Write the difference between ES6 and JS.
// As for ES6 vs. JavaScript, JavaScript is the language we use to write code,
// and ES6 is like an upgraded version of JavaScript that brings in new features and improvements. 
// So, ES6 is just a more advanced and modern way of writing JavaScript code, giving us better tools and options for programming.


// 6. What are some of the major features introduced in ES6?

// - Major features introduced in ES6 include:


// - Arrow functions: Shorter syntax for function expressions.

// - Classes: Syntactic sugar for creating objects and handling inheritance.

// - Template literals: Enhanced string interpolation using backticks (`).

// - Destructuring: Syntax for unpacking values from arrays or properties from objects.

// - Default parameters: Function parameters with default values.

// - Rest and spread operators: Syntax for variable arguments and array/object manipulation.

// - let and const: Block-scoped variables and constants.

// - Promises: Built-in support for asynchronous programming.

// - Modules: Syntax for importing and exporting code in a modular fashion.
