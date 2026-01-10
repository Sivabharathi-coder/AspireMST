const cart = [
  { name: "Shoes", price: 1200, qty: 2 },
  { name: "T-Shirt", price: 800, qty: 1 },
  { name: "Jeans", price: 2000, qty: 1 },
  { name: "Cap", price: 300, qty: 3 }
];


// map 

const itemsWithTotal = cart.map(item => ({
  totalPrice: item.price * item.qty
}));

console.log(itemsWithTotal);


// filter  

const expensiveItems = itemsWithTotal.filter(item => item.totalPrice > 1000);

console.log(expensiveItems);

// reduce 

const cartTotal = itemsWithTotal.reduce((acc, item) => acc + item.totalPrice, 0);

console.log("Total Cart Amount:", cartTotal); 




