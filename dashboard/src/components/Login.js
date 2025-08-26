import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Login({ setUser }) {
    const [email, setEmail] = useState("");
    const [role, setRole] = useState("");
    const [error, setError] = useState("");
    const navigate = useNavigate();

    const handleLogin = (e) => {
        e.preventDefault();

        if (email === "siva@example.com" && role === "Developer") {
            const loggedInUser = { email, role, name: "Siva Bharathi" };
            setUser(loggedInUser);
            localStorage.setItem("user", JSON.stringify(loggedInUser)); //  Save
            navigate("/dashboard");
        } else {
            setError("Invalid credentials. Try again!");
        }
    };

    return (
        <div className="form-container">
            <h2>Login</h2>
            <form onSubmit={handleLogin}>
                <input
                    type="email"
                    placeholder="Enter Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                />

                <input
                    type="text"
                    placeholder="Enter Role"
                    value={role}
                    onChange={(e) => setRole(e.target.value)}
                    required
                />

                <button type="submit">Login</button>
            </form>
            {error && <p style={{ color: "red", marginTop: "10px" }}>{error}</p>}
        </div>
    );
}
