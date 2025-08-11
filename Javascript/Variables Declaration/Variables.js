// Declare global variables
var userName = "Siva";          // function scoped
let userAge = 25;               // block scoped
const country = "India";        // constant

console.log("User:", userName);
console.log("Age:", userAge);
console.log("Country:", country);

// Arithmetic operations
let num1 = 10;
let num2 = 5;

console.log("Addition:", num1 + num2);
console.log("Subtraction:", num1 - num2);
console.log("Multiplication:", num1 * num2);
console.log("Division:", num1 / num2);

// String manipulation
let greeting = "Hello";
let fullMessage = greeting + ", " + userName + "!";
console.log("Message:", fullMessage);
console.log("Uppercase:", fullMessage.toUpperCase());

// Array usage
let fruits = ["Apple", "Banana", "Orange"];
fruits.push("Mango");  // add element

console.log("Fruits:", fruits);

// Loop through array
for (let i = 0; i < fruits.length; i++) {
    console.log("Fruit at", i, "is", fruits[i]);
}

// Object usage
const user = {
    name: "Siva",
    age: 25,
    skills: ["HTML", "CSS", "JavaScript"]
};

console.log("User Info:", user);
console.log("First Skill:", user.skills[0]);

// Conditional statements
if (userAge > 18) {
    let access = "Granted"; // block scoped
    console.log("Access:", access);
} else {
    let access = "Denied";
    console.log("Access:", access);
}

// Scope Example
{
    let blockLet = "I'm block-scoped!";
    const blockConst = "Me too!";
    var blockVar = "I'm function-scoped!";
    console.log(blockLet);    
    console.log(blockConst);   
    console.log(blockVar);     
}

// console.log(blockLet);     Error
// console.log(blockConst);   Error
console.log(blockVar);       // OK 

// Changing values
userName = "Bharath";    // var can be changed
userAge = 26;            // let can be changed
// country = "USA";       Error: const cannot be changed

console.log("Updated Name:", userName);
console.log("Updated Age:", userAge); 


