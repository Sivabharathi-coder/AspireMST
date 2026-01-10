import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Register({ setUser }) {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        role: "",
    });
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        setUser(formData);
        localStorage.setItem("user", JSON.stringify(formData)); //Save
        navigate("/dashboard");
    };

    return (
        <div className="form-container">
            <h2>Register</h2>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    placeholder="Full Name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    required
                />
                <input
                    type="email"
                    placeholder="Email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    required
                />
                <input
                    type="text"
                    placeholder="Role"
                    value={formData.role}
                    onChange={(e) => setFormData({ ...formData, role: e.target.value })}
                    required
                />
                <button type="submit">Register</button>
            </form>
        </div>
    );
}
