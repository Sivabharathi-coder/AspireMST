let fruits = ["orange", "banana", "apple"];

// Access with index
console.log("First fruit:", fruits[0]);           // First fruit: orange
console.log("Second fruit:", fruits[1]);          // Second fruit: banana
console.log("Third fruit:", fruits[2]);           // Third fruit: apple

// Adding/Removing
fruits.pop();         // removes "apple" ➜ ["orange", "banana"]
fruits.shift();       // removes "orange" ➜ ["banana"]
fruits.push("redbanana");   // adds at end ➜ ["banana", "redbanana"]
fruits.unshift("grapes");  // adds at beginning ➜ ["grapes", "banana", "redbanana"]

console.log("Fruits after add/remove:", fruits);
// Fruits after add/remove: [ 'grapes', 'banana', 'redbanana' ]

// Looping
for (let i = 0; i < fruits.length; i++) {
  console.log("Fruit", i, ":", fruits[i]);
}
// Fruit 0 : grapes
// Fruit 1 : banana
// Fruit 2 : redbanana

// Array methods
console.log("Includes 'orange':", fruits.includes("orange"));
// Includes 'orange': false

console.log("Index of 'orange':", fruits.indexOf("orange"));
// Index of 'orange': -1

console.log("Last index of 'orange':", fruits.lastIndexOf("orange"));
// Last index of 'orange': -1

console.log("Slice (1,3):", fruits.slice(1, 3));
// Slice (1,3): [ 'banana', 'redbanana' ]

console.log("Splice remove at 1:", fruits.splice(1, 1));
// Splice remove at 1: [ 'banana' ]
console.log("After splice remove:", fruits);
// After splice remove: [ 'grapes', 'redbanana' ]

fruits.splice(1, 0, "kiwi");
// inserts 'kiwi' at index 1 ➜ ['grapes', 'kiwi', 'redbanana']
console.log("After splice insert:", fruits);
// After splice insert: [ 'grapes', 'kiwi', 'redbanana' ]

fruits.reverse();
// Reversed fruits: [ 'redbanana', 'kiwi', 'grapes' ]
console.log("Reversed fruits:", fruits);

// Sorting numbers
let num = [6, 2, 1, 4];

console.log("numsort", num.sort());
// numsort [ 1, 2, 4, 6 ]  ← (works here even without compareFn, but not reliable for all)
console.log("numsort", num.sort((a, b) => a - b));
// numsort [ 1, 2, 4, 6 ]  ← correct ascending sort

console.log("frutisjoin", num.join(", "));
// frutisjoin 1, 2, 4, 6

console.log("string convert", num.toString());
// string convert 1,2,4,6

console.log("string convert", fruits.toString());
// string convert redbanana,kiwi,grapes

// forEach example
fruits.forEach((item, index) => {
  console.log("item", item + " " + "index", index);
});
// item redbanana index 0
// item kiwi index 1
// item grapes index 2

// Flattening nested arrays
let nested = [1, [2, [3]]];

console.log("flat2", nested.flat(2));
// flat2 [ 1, 2, 3 ]

console.log("flat1", nested.flat(1));
// flat1 [ 1, 2, [ 3 ] ]

console.log("flat3", nested.flat(3));
// flat3 [ 1, 2, 3 ]
