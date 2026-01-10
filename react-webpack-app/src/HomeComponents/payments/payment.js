import React, { useState, useRef, useEffect } from "react";
import "./payment.css";
import { createConnection } from './chat.js';

export default function PayMiniBootstrap() {

    const [method, setMethod] = useState("");
    const [amount, setAmount] = useState("");
    const [note, setNote] = useState("");
    const [showPin, setShowPin] = useState(false);
    const [pin, setPin] = useState(["", "", "", ""]);
    const [cardNumber, setCardNumber] = useState("");
    const [cardName, setCardName] = useState("");
    const [expiry, setExpiry] = useState("");
    const [cvv, setCvv] = useState("");
    const [upiId, setUpiId] = useState("");
    const pinRefs = [useRef(null), useRef(null), useRef(null), useRef(null)];

    useEffect(() => {
        const connection = createConnection();
        connection.connect();
        return () => connection.disconnect();
    }, []);

    const inputRef = useRef(null);

    useEffect(() => {
        inputRef.current.focus();
    }, []);

    const canPay =
        method &&
        Number(amount) > 0 &&
        (
            (method === "card" && cardNumber.length === 16 && cardName && expiry && cvv.length === 3) ||
            (method === "upi" && upiId.includes("@")) ||
            method === "wallet"
        );

    const handlePayNow = () => {
        if (!canPay) return;
        setPin(["", "", "", ""]);
        setShowPin(true);
        setTimeout(() => pinRefs[0].current?.focus(), 100);
    };

    const handlePinChange = (i, value) => {
        if (!/^[0-9]?$/.test(value)) return;
        const next = [...pin];
        next[i] = value;
        setPin(next);
        if (value && i < 3) pinRefs[i + 1].current?.focus();
    };

    return (
        <div className="paymini-container">
            <div className="paymini-box">
                <h3 className="title">PayMini</h3>

                <div className="form-group">
                    <label>Payment Method</label>
                    <select value={method} onChange={(e) => setMethod(e.target.value)}>
                        <option value="">Select</option>
                        <option value="upi">UPI</option>
                        <option value="card">Card</option>
                        <option value="wallet">Wallet</option>
                    </select>
                </div>

                {method === "card" && (
                    <>
                        <div className="form-group">
                            <label>Card Number</label>
                            <input type="text" maxLength={16} value={cardNumber}
                                onChange={(e) => setCardNumber(e.target.value.replace(/[^0-9]/g, ""))} />
                        </div>
                        <div className="form-group">
                            <label>Cardholder Name</label>
                            <input type="text" value={cardName} onChange={(e) => setCardName(e.target.value)} />
                        </div>
                        <div className="form-row">
                            <div>
                                <label>Expiry (MM/YY)</label>
                                <input type="text" maxLength={5} placeholder="MM/YY"
                                    value={expiry} onChange={(e) => setExpiry(e.target.value)} />
                            </div>
                            <div>
                                <label>CVV</label>
                                <input type="password" maxLength={3}
                                    value={cvv} onChange={(e) => setCvv(e.target.value.replace(/[^0-9]/g, ""))} />
                            </div>
                        </div>
                    </>
                )}

                {method === "upi" && (
                    <div className="form-group">
                        <label>UPI ID</label>
                        <input type="text" value={upiId} onChange={(e) => setUpiId(e.target.value)} />
                    </div>
                )}

                <div className="form-group">
                    <label>Amount (₹)</label>
                    <input type="number" value={amount} onChange={(e) => setAmount(e.target.value)} />
                </div>

                <div className="form-group">
                    <label>Note (Optional)</label>
                    <input type="text" value={note} onChange={(e) => setNote(e.target.value)} />
                </div>

                <button
                    className={`pay-button ${canPay ? "active" : ""}`}
                    disabled={!canPay}
                    onClick={handlePayNow}
                >
                    Pay Now
                </button>
            </div>

            {showPin && (
                <div className="pin-overlay">
                    <div className="pin-box">
                        <h5 className="pin-label">Enter PIN</h5>
                        <p>Confirm payment of ₹{amount} via {method.toUpperCase()}.</p>
                        <div className="pin-inputs">
                            {pin.map((d, i) => (
                                <input
                                    key={i}
                                    ref={pinRefs[i]}
                                    type="password"
                                    maxLength={1}
                                    value={d}
                                    onChange={(e) => handlePinChange(i, e.target.value)}
                                />
                            ))}
                        </div>
                        <button
                            className={`confirm-button ${pin.join("").length === 4 ? "active" : ""}`}
                            disabled={pin.join("").length !== 4}
                            onClick={() => setShowPin(false)}
                        >
                            Confirm & Pay
                        </button>
                    </div>
                </div>
            )}
            <input type="text" placeholder="Type here..." ref={inputRef} />

        </div>
    );
}
