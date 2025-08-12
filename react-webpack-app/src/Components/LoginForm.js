import React, { useState } from "react";
import users from '../users.json';
import './LoginForm.css';
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

const LoginForm = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        const foundUser = users.find(
            (user) => user.email === email && user.password === password
        );
        if (foundUser) {
            alert(`Welcome ${foundUser.fullname}`);

            // Save user info in localStorage
            localStorage.setItem("userId", foundUser.id);
            localStorage.setItem("email", foundUser.email);
            localStorage.setItem("role", foundUser.role);

            setError("");

            // Navigate based on user role
            if (foundUser.role === "job") {
                navigate("/dashboard");
            } else if (foundUser.role === "home") {
                navigate("/homebooking");
            } else {
                // fallback route
                navigate("/");
            }
        } else {
            setError("Email or Password is incorrect");
        }
    };

    return (
        <div className="form-container">
            <form onSubmit={handleSubmit}>
                <label htmlFor="email">Email</label>
                <input
                    type="email"
                    value={email}
                    name="email"
                    onChange={(e) => setEmail(e.target.value)}
                    required
                />
                <label htmlFor="password">Password</label>
                <input
                    type="password"
                    value={password}
                    name="password"
                    onChange={(e) => setPassword(e.target.value)}
                    required
                />
                <div className="forgotPassword">
                    <Link to="/forgotPassword">
                        Forgot Password?
                    </Link>
                </div>
                <button type="submit">Login</button>
                {error && <p style={{ color: "red" }}>{error}</p>}
            </form>
        </div>
    );
};

export default LoginForm;
