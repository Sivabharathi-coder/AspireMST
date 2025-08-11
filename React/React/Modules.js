// ES6 Modules

const add = (a, b) => a + b;
module.export = { add };


//  Default parameteres

function name(name = 'guest') {
    console.log(`Hello ${name}`);
}

// Rest Parameters:

function sum(...nums) {
    return nums.reduce((a, b) => a + b);
}

// Spread Operator:

let arr = [1, 2];
let newArr = [...arr, 4, 5];

// Arrow Functions

const names = (name) => {
    return name
}

const x = 1;
const obj = { x };
const obje = {
    call() {
        return "hello";
    }
}

// Set 

const set = new Set();
set.add(1);
set.add(1);
set.has(1);
set.size;
set.delete(1);


// Map 

const myMap = new Map();
myMap.set('name', 'siva');
myMap.set(true, 'active');

myMap.delete('name');


class Person {
    constructor(name) {
        this.name = name;
    }
    greet() {
        return `Hi I'm ${this.name}`;
    }
}

class Employee extends Person {
    constructor(name, role) {
        super(name);
        this.role = role;
    }
}

const promise = new Promise((resolve, reject) => {
    setTimeout(() => resolve("Done"), 1000);
})

promise.then(console.log);




