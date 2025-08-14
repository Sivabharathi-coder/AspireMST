import React, { useState, useRef } from "react";

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

    const canPay = method && Number(amount) > 0 && (
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
        <div className="container py-5" style={{ fontFamily: "Arial, sans-serif" }}>
            <div style={{ maxWidth: "500px", margin: "0 auto", background: "#fff", borderRadius: "10px", boxShadow: "0 4px 10px rgba(0,0,0,0.1)", padding: "20px" }}>
                <h3 style={{ textAlign: "center", marginBottom: "20px", color: "#007bff" }}>PayMini</h3>

                <div style={{ marginBottom: "15px" }}>
                    <label style={{ display: "block", fontWeight: "bold" }}>Payment Method</label>
                    <select style={{ width: "100%", padding: "10px", borderRadius: "5px", border: "1px solid #ccc" }} value={method} onChange={(e) => setMethod(e.target.value)}>
                        <option value="">Select</option>
                        <option value="upi">UPI</option>
                        <option value="card">Card</option>
                        <option value="wallet">Wallet</option>
                    </select>
                </div>

                {method === "card" && (
                    <>
                        <div style={{ marginBottom: "15px" }}>
                            <label style={{ display: "block", fontWeight: "bold" }}>Card Number</label>
                            <input type="text" maxLength={16} style={{ width: "100%", padding: "10px", borderRadius: "5px", border: "1px solid #ccc" }} value={cardNumber} onChange={(e) => setCardNumber(e.target.value.replace(/[^0-9]/g, ""))} />
                        </div>
                        <div style={{ marginBottom: "15px" }}>
                            <label style={{ display: "block", fontWeight: "bold" }}>Cardholder Name</label>
                            <input type="text" style={{ width: "100%", padding: "10px", borderRadius: "5px", border: "1px solid #ccc" }} value={cardName} onChange={(e) => setCardName(e.target.value)} />
                        </div>
                        <div style={{ display: "flex", gap: "10px", marginBottom: "15px" }}>
                            <div style={{ flex: 1 }}>
                                <label style={{ display: "block", fontWeight: "bold" }}>Expiry (MM/YY)</label>
                                <input type="text" maxLength={5} placeholder="MM/YY" style={{ width: "100%", padding: "10px", borderRadius: "5px", border: "1px solid #ccc" }} value={expiry} onChange={(e) => setExpiry(e.target.value)} />
                            </div>
                            <div style={{ flex: 1 }}>
                                <label style={{ display: "block", fontWeight: "bold" }}>CVV</label>
                                <input type="password" maxLength={3} style={{ width: "100%", padding: "10px", borderRadius: "5px", border: "1px solid #ccc" }} value={cvv} onChange={(e) => setCvv(e.target.value.replace(/[^0-9]/g, ""))} />
                            </div>
                        </div>
                    </>
                )}

                {method === "upi" && (
                    <div style={{ marginBottom: "15px" }}>
                        <label style={{ display: "block", fontWeight: "bold" }}>UPI ID</label>
                        <input type="text" style={{ width: "100%", padding: "10px", borderRadius: "5px", border: "1px solid #ccc" }} value={upiId} onChange={(e) => setUpiId(e.target.value)} />
                    </div>
                )}

                <div style={{ marginBottom: "15px" }}>
                    <label style={{ display: "block", fontWeight: "bold" }}>Amount (₹)</label>
                    <input type="number" style={{ width: "100%", padding: "10px", borderRadius: "5px", border: "1px solid #ccc" }} value={amount} onChange={(e) => setAmount(e.target.value)} />
                </div>

                <div style={{ marginBottom: "20px" }}>
                    <label style={{ display: "block", fontWeight: "bold" }}>Note (Optional)</label>
                    <input type="text" style={{ width: "100%", padding: "10px", borderRadius: "5px", border: "1px solid #ccc" }} value={note} onChange={(e) => setNote(e.target.value)} />
                </div>

                <button style={{ width: "100%", padding: "10px", background: canPay ? "#007bff" : "#ccc", color: "white", border: "none", borderRadius: "5px", cursor: canPay ? "pointer" : "not-allowed" }} disabled={!canPay} onClick={handlePayNow}>
                    Pay Now
                </button>
            </div>

            {showPin && (
                <div style={{ position: "fixed", top: 0, left: 0, right: 0, bottom: 0, background: "rgba(0,0,0,0.5)", display: "flex", alignItems: "center", justifyContent: "center" }}>
                    <div style={{ background: "#fff", padding: "20px", borderRadius: "10px", width: "300px", textAlign: "center" }}>
                        <h5 style={{ marginBottom: "15px" }}>Enter PIN</h5>
                        <p>Confirm payment of ₹{amount} via {method.toUpperCase()}.</p>
                        <div style={{ display: "flex", justifyContent: "center", gap: "10px", marginBottom: "20px" }}>
                            {pin.map((d, i) => (
                                <input
                                    key={i}
                                    ref={pinRefs[i]}
                                    type="password"
                                    maxLength={1}
                                    value={d}
                                    onChange={(e) => handlePinChange(i, e.target.value)}
                                    style={{ width: "40px", padding: "10px", textAlign: "center", fontSize: "18px", borderRadius: "5px", border: "1px solid #ccc" }}
                                />
                            ))}
                        </div>
                        <button style={{ padding: "10px 20px", background: "#28a745", color: "white", border: "none", borderRadius: "5px", cursor: pin.join("").length === 4 ? "pointer" : "not-allowed" }} disabled={pin.join("").length !== 4} onClick={() => setShowPin(false)}>Confirm & Pay</button>
                    </div>
                </div>
            )}
        </div>
    );
}
