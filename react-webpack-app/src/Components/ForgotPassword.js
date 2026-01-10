import React, { useState } from "react";
import users from "../users.json";
import { useNavigate } from "react-router-dom";
import "./ForgotPassword.css";
const ForgotPassword = () => {
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");
    const navigate = useNavigate();


    const handleForgotPassword = (e) => {
        e.preventDefault();
        const user = users.find((user) => user.email === email);
        if (user) {
            setMessage("password has been reset successfully");

            setTimeout(() => {
                navigate("/");

            }, 3000)

        }
        else {
            setMessage("Email not found");
        }

    }

    return (

        <div className="form-container">
            <h1>Forgot Password</h1>
            <form onSubmit={handleForgotPassword}>
                <label htmlFor="email" className="registerLabel">Enter your Registered email</label>
                <input
                    type="email"
                    name="email"
                    value={email}
                    className="emailInput"
                    onChange={(e) => setEmail(e.target.value)}
                    required
                />
                
                <button type="submit">Reset Password </button>

                {message && <p>{message}</p>}

            </form>
        </div>
    )
}


export default ForgotPassword;