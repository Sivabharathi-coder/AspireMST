let fruits = ["orange", "banana", "apple"]; // Declare an array of fruits
console.log("Initial Fruits:", fruits);

// Accessing items by index
console.log("First fruit:", fruits[0]);
console.log("Second fruit:", fruits[1]);
console.log("Third fruit:", fruits[2]);

// Add & Remove
fruits.push("redbanana"); // Add to end
fruits.unshift("grapes"); // Add to beginning
console.log("After push & unshift:", fruits);

fruits.pop(); // Remove from end
fruits.shift(); // Remove from beginning
console.log("After pop & shift:", fruits);

// Looping through array
for (let i = 0; i < fruits.length; i++) {
    console.log("Fruit at index", i, "is", fruits[i]);
}

// Using forEach
fruits.forEach(function (fruit, index) {
    console.log("forEach:", index, fruit);
});

// includes - check value
console.log("Includes 'orange':", fruits.includes("orange"));

// indexOf, lastIndexOf
console.log("Index of 'orange':", fruits.indexOf("orange"));
console.log("Last index of 'orange':", fruits.lastIndexOf("orange"));

// slice - does not change original array
let sliced = fruits.slice(1, 3);
console.log("Sliced fruits (1,3):", sliced);

// splice - remove & add
fruits.splice(1, 1); // remove 1 item at index 1
console.log("After splice remove:", fruits);

fruits.splice(1, 0, "kiwi"); // insert 'kiwi' at index 1
console.log("After splice add kiwi:", fruits);

// reverse - changes original array
fruits.reverse();
console.log("After reverse:", fruits);

// sort - alphabetical sort
fruits.sort();
console.log("After sort:", fruits);

// concat - merge arrays
let moreFruits = ["mango", "pineapple"];
let allFruits = fruits.concat(moreFruits);
console.log("After concat:", allFruits);

// join - array to string
let fruitString = allFruits.join(", ");
console.log("Joined string:", fruitString);

// filter - get items that match condition
let filtered = allFruits.filter(fruit => fruit.includes("a"));
console.log("Filtered fruits (with 'a'):", filtered);

// map - transform items
let upperCased = allFruits.map(fruit => fruit.toUpperCase());
console.log("Uppercased fruits:", upperCased);

// find - get first match
let found = allFruits.find(fruit => fruit.startsWith("p"));
console.log("First fruit starting with 'p':", found);

// some - at least one matches
let hasBanana = allFruits.some(fruit => fruit === "banana");
console.log("Contains banana?", hasBanana);

// every - all match condition
let allStrings = allFruits.every(fruit => typeof fruit === "string");
console.log("All are strings?", allStrings);

// reduce - reduce to single value
let totalLength = allFruits.reduce((sum, fruit) => sum + fruit.length, 0);
console.log("Total length of all fruits:", totalLength);

// flat - flatten nested arrays
let nested = [["apple", "banana"], ["mango"]];
let flattened = nested.flat();
console.log("Flattened array:", flattened);

// from - convert string to array
let word = "fruit";
let charArray = Array.from(word);
console.log("Array from string:", charArray);

// isArray - check if it's an array
console.log("Is 'fruits' an array?", Array.isArray(fruits));


// 2. New delivery comes in (add to end)
fruits.push("mango", "kiwi");
console.log("After push (new delivery):", fruits);

// 3. One fruit was returned (remove from end)
fruits.pop();
console.log("After pop (return):", fruits);

// 4. Customer took first fruit (remove from start)
fruits.shift();
console.log("After shift (sold first item):", fruits);

// 5. New fruit arrives at beginning
fruits.unshift("grapes");
console.log("After unshift (new front item):", fruits);

// 6. Loop through inventory
console.log("All Fruits:");
fruits.forEach((fruit, index) => {
    console.log(index + 1 + ".", fruit);
});

// 7. Check if certain fruit is in stock
console.log("Includes banana?", fruits.includes("banana")); // true or false

// 8. Find positions
console.log("Index of orange:", fruits.indexOf("orange"));
console.log("Last index of orange:", fruits.lastIndexOf("orange"));

// 9. Slice top 2 fruits (for display)
let topFruits = fruits.slice(0, 2);
console.log("Top Fruits (slice):", topFruits);

// 10. Remove damaged fruit (splice)
fruits.splice(1, 1); // remove second fruit
console.log("After splice (damaged removed):", fruits);

// 11. Add exotic fruit (splice insert)
fruits.splice(1, 0, "dragonfruit");
console.log("After splice (insert exotic):", fruits);

// 12. Reverse display
fruits.reverse();
console.log("Reversed Inventory:", fruits);

// 13. Sort alphabetically
fruits.sort();
console.log("Sorted Inventory:", fruits);

// 14. Merge with another delivery
let delivery = ["pineapple", "papaya"];
let combined = fruits.concat(delivery);
console.log("After concat (combined delivery):", combined);

// 15. Convert to string for report
let report = combined.join(", ");
console.log("Inventory Report:", report);

// 16. Filter fruits with 'p'
let pFruits = combined.filter(fruit => fruit.includes("p"));
console.log("Fruits with 'p':", pFruits);

// 17. Capitalize all fruits (map)
let capitalized = combined.map(fruit => fruit.toUpperCase());
console.log("Capitalized Inventory:", capitalized);

// 18. Find first fruit starting with 'd'
let dFruit = combined.find(fruit => fruit.startsWith("d"));
console.log("First fruit with 'd':", dFruit);

    

// 20. Check if all items are strings (every)
let allAreStrings = combined.every(fruit => typeof fruit === "string");
console.log("All items are strings?", allAreStrings);


// 22. Handle nested delivery (flat)
let nestedDelivery = [["apple", "banana"], ["kiwi"], ["papaya"]];
let flattenedDelivery = nestedDelivery.flat();
console.log("Flattened Delivery:", flattenedDelivery);



// 24. Check if variable is array
console.log("Is 'fruits' an array?", Array.isArray(fruits));
