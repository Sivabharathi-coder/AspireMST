import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import usersData from "../data/users.json";

export default function Dashboard({ user, setUser }) {
    const [users, setUsers] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        setUsers([user, ...usersData]);
    }, [user]);

    const handleLogout = () => {
        setUser(null);
        localStorage.removeItem("user"); // Clear
        navigate("/login");
    };

    return (
        <div className="dashboard">
            <h2>Welcome {user?.name || user?.email} 🎉</h2>
            <button onClick={handleLogout} style={{ marginBottom: "15px", padding: "10px", borderRadius: "6px", background: "#ff4d4d", color: "#fff", border: "none", cursor: "pointer" }}>
                Logout
            </button>
            <table>
                <thead>
                    <tr>
                        <th>Email</th>
                        <th>Role</th>
                    </tr>
                </thead>
                <tbody>
                    {users.map((u, idx) => (
                        <tr key={idx}>
                            <td>{u.email}</td>
                            <td>{u.role}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}
