const fruits = ["apple", "banana", "cherry"];
const numbers = new Array(1, 2, 3, 4);

console.log(fruits[0]);
console.log(fruits[fruits.length - 1]);

fruits.push("orange");

fruits.unshift("mango");

fruits.pop();

fruits.shift();
fruits.forEach(function (fruit, index) {
    console.log(index + ": " + fruit);
});
const numbers = [1, 2, 3, 4];
const squared = numbers.map(num => num * num);
const evenNumbers = numbers.filter(num => num % 2 === 0);
console.log(numbers.find(num => num > 2));
console.log(numbers.includes(3));
const nums = [20, 5, 100, 10];
nums.sort((a, b) => a - b);
console.log(fruits.join(", "));
console.log(fruits.slice(1, 3)); 




