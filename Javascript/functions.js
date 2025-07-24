function placeOrder(orderId, items, discountCode = null) {
    console.log(`Placing order #${orderId}...\n`);

    let total = 0;

    items.forEach(item => {
        const itemTotal = item.price * item.quantity;
        console.log(`- ${item.name}: ₹${item.price} x ${item.quantity} = ₹${itemTotal}`);
        total += itemTotal;
    });

    if (discountCode === "SAVE10") {
        console.log("\nApplying 10% discount...");
        total *= 0.9;
    }

    console.log(`\nTotal before tax: ₹${total.toFixed(2)}`);

    const tax = total * 0.18;
    total += tax;

    console.log(`Tax (18% GST): ₹${tax.toFixed(2)}`);
    console.log(`Final Total: ₹${total.toFixed(2)}\n`);
    console.log(`Order #${orderId} placed successfully!\n`);
}

const cartItems = [
    { name: "Keyboard", price: 1500, quantity: 1 },
    { name: "Mouse", price: 700, quantity: 2 },
    { name: "Headset", price: 2500, quantity: 1 }
];

placeOrder(1001, cartItems, "SAVE10");
