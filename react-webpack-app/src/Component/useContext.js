import { useContext, createContext, useState } from "react";
import React from "react";
const UserContext = createContext();

function UserProvider({ children }) {
    const [user, setUser] = useState(null);

    const login = (email) => {
        setUser({ email });
        localStorage.setItem("email", email);
    };

    const logout = () => {
        setUser(null);
        localStorage.removeItem("email");
    };

    return (
        <UserContext.Provider value={{ user, login, logout }}>
            <Navbar />
            <Dashboard />
        </UserContext.Provider>
    );
}

function Navbar() {
    const { user, logout } = useContext(UserContext);
    const email = user ? user.email : localStorage.getItem("email") || "";

    const getInitials = (email) => {
        return email ? email.charAt(0).toUpperCase() : "U";
    };

    return (
        <nav className="navbar">
            <div className="navbar-logo">JobPortal</div>
            <div className="user-info">
                <div className="avatar">{getInitials(email)}</div>
                {email && (
                    <div className="dropdown">
                        <button onClick={logout}>Logout</button>
                    </div>
                )}
            </div>
        </nav>
    );
}

function Dashboard() {
    const { user, login } = useContext(UserContext);
    const [emailInput, setEmailInput] = useState("");

    const handleLogin = () => {
        if (emailInput) {
            login(emailInput);
        }
    };

    return (
        <div className="dashboard">
            {user ? (
                <h2>Welcome, {user.email}!</h2>
            ) : (
                <div>
                    <input
                        type="email"
                        placeholder="Enter your email"
                        value={emailInput}
                        onChange={(e) => setEmailInput(e.target.value)}
                    />
                    <button onClick={handleLogin}>Login</button>
                </div>
            )}
        </div>
    );
}

export default UserProvider;