import React, { useState } from "react";

function ControlledLogin() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        alert(`Email: ${email}, Password: ${password}`);
    };

    return (
        <form onSubmit={handleSubmit}>
            <h2>Controlled Login</h2>
            <input
                type="email"
                placeholder="Enter Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
            />
            {email && !email.includes("@") && (
                <p style={{ color: "red" }}>Invalid Email</p>
            )}
            <br />

            <input
                type="password"
                placeholder="Enter Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
            />
            <br />

            <button type="submit">Login</button>
        </form>
    );
}

export default ControlledLogin;


// Controlled → React manages value (best for validation, live updates, search bars).