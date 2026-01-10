// 1. Currency Format
const amount = 140000;
const currencyFormatter = new Intl.NumberFormat('en-IN', {
    style: "currency",
    currency: "INR"
});
document.getElementById("currency").textContent = currencyFormatter.format(amount);

// 2. Date Format
const date = new Date();
const dateFormatter = new Intl.DateTimeFormat('en-GB', {
    day: '2-digit',
    month: 'short',
    year: 'numeric'
});
document.getElementById("date").textContent = dateFormatter.format(date);

// 3. Sorting Local Strings (Tamil)
const names = ["குமார்", "अर्जुन", "முருகன்", "अमित"];
const collator = new Intl.Collator('ta-IN');
const sortedNames = names.sort(collator.compare);
const nameList = document.getElementById("names");
sortedNames.forEach(name => {
    const li = document.createElement("li");
    li.textContent = name;
    nameList.appendChild(li);
});

// 4. Plural Rules for cart items
const cart = [
    { name: "Pen", qty: 1 },
    { name: "Notebook", qty: 3 },
    { name: "Eraser", qty: 0 }
];

const pluralRules = new Intl.PluralRules("en-US");
const cartList = document.getElementById("cartItems");

cart.forEach(item => {
    const li = document.createElement("li");
    const pluralCategory = pluralRules.select(item.qty);
    const label = (pluralCategory === 'one') ? item.name : item.name + "s";
    li.textContent = `${item.qty} ${label}`;
    cartList.appendChild(li);
});