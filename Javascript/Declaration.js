function printMyName() {
  console.log("My name is Siva");
}
printMyName();

const multiply = function(a, b) {
  return a * b;
};
console.log(multiply(4, 5)); 

const isEven = (num) => num % 2 === 0;

console.log(isEven(4)); 
console.log(isEven(7)); 


function welcomeUser(name) {
  console.log("Welcome, " + name + "!");
}
welcomeUser("Siva");

function square(num) {
  return num * num;
}

let result = square(6);
console.log("Square:", result); 

function greet(name = "Guest") {
  console.log("Hello, " + name);
}
greet();        
greet("Siva"); 


function greet(name = "Guest") {
  console.log("Hello, " + name);
}
greet();         
greet("Siva");  

function addAll(...numbers) {
  let total = 0;
  for (let num of numbers) {
    total += num;
  }
  return total;
}
console.log(addAll(1, 2, 3, 4)); 

function performTask(callback) {
  console.log("Doing task...");
  callback();
}

function jobDone() {
  console.log(" Job Done!");
}

performTask(jobDone);


setTimeout(function() {
  console.log("2 seconds passed!");
}, 2000);


