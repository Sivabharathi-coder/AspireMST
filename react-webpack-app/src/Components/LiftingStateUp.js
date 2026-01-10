import React, { useState } from "react";
function Product({ name, price, quantity, onQuantityChange }) {
    return (
        <div>
            <p>{name} - ${price}</p>
            <input
                type="number"
                value={quantity}
                onChange={(e) => onQuantityChange(Number(e.target.value))}
            />
        </div>
    );
}

function Cart() {
    const [appleQty, setAppleQty] = React.useState(1);
    const [bananaQty, setBananaQty] = React.useState(2);

    const total = appleQty * 10 + bananaQty * 5;

    return (
        <div>
            <h2>Shopping Cart</h2>
            <Product name="Apple" price={10} quantity={appleQty} onQuantityChange={setAppleQty} />
            <Product name="Banana" price={5} quantity={bananaQty} onQuantityChange={setBananaQty} />
            <h3>Items in Cart:</h3>
            <ul>
                <li>Apple: {appleQty}</li>
                <li>Banana: {bananaQty}</li>
            </ul>
            <h3>Cart Summary</h3>
            <p>Apple: ${appleQty * 10}</p>
            <p>Banana: ${bananaQty * 5}</p>

            <p>Total Items: {appleQty + bananaQty}</p>
            <p>Total Price: ${appleQty * 10 + bananaQty * 5}</p>

            <h3>Final Summary</h3>
            <p>Apple Quantity: {appleQty}</p>
            <p>Banana Quantity: {bananaQty}</p>
            <p>Total Items: {appleQty + bananaQty}</p>
            <p>Total Price: ${total}</p>
            <p>Apple Price: ${appleQty * 10}</p>
            <p>Banana Price: ${bananaQty * 5}</p>
            <p>Final Total: ${total}</p>
            <p>Final Summary:</p>
            <ul>
                <li>Apple: {appleQty} x $10 = ${appleQty * 10}</li>
                <li>Banana: {bananaQty} x $5 = ${bananaQty * 5}</li>

            </ul>
            <p>Total Items: {appleQty + bananaQty}</p>
            <p>Total Price: ${total}</p>
            <p>Final Total: ${total}</p>
            <p>Final Summary:</p>
            <ul>
                <li>Apple: {appleQty} x $10 = ${appleQty * 10}</li>
                <li>Banana: {bananaQty} x $5 = ${bananaQty * 5}</li>
            </ul>
            <p>Total Items: {appleQty + bananaQty}</p>

            <h3>Total: ${total}</h3>
        </div>
    );
}


export default Cart;

