let fruits = ["orange", "banana", "apple"];

// Access with index
console.log("First fruit:", fruits[0]);
console.log("Second fruit:", fruits[1]);
console.log("Third fruit:", fruits[2]);

// Adding/Removing
fruits.pop(); // removes "apple"
fruits.shift(); // removes "orange"
fruits.push("redbanana"); // adds at end
fruits.unshift("grapes"); // adds at beginning

console.log("Fruits after add/remove:", fruits);

// Looping
for (let i = 0; i < fruits.length; i++) {
  console.log("Fruit", i, ":", fruits[i]);
}

// Array methods
console.log("Includes 'orange':", fruits.includes("orange"));
console.log("Index of 'orange':", fruits.indexOf("orange"));
console.log("Last index of 'orange':", fruits.lastIndexOf("orange"));
console.log("Slice (1,3):", fruits.slice(1, 3));
console.log("Splice remove at 1:", fruits.splice(1, 1)); // removes 1 item at index 1
console.log("After splice remove:", fruits);
fruits.splice(1, 0, "kiwi"); // insert at index 1
console.log("After splice insert:", fruits);
fruits.reverse();
console.log("Reversed fruits:", fruits);

let num=[6,2,1,4]
console.log("numsort",num.sort());
console.log("numsort",num.sort((a, b) => a - b));

console.log("frutisjoin",num.join(", "));
console.log("string convert",num.toString());
console.log("string convert",fruits.toString());

fruits.forEach((item, index)=>{
    console.log("item",item+ " "+ "index",index)
})
let nested = [1, [2, [3]]];
 // [1, 2, 3]
console.log("flat2",nested.flat(2))
console.log("flat1",nested.flat(1))
console.log("flat3",nested.flat(3))