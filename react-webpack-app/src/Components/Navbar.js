import React, { useEffect, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { FaBars } from "react-icons/fa";
import "./Navbar.css";

const Navbar = () => {
    const [email, setEmail] = useState("");
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const navigate = useNavigate();
    const location = useLocation();

    // Load email from localStorage
    useEffect(() => {
        const storedEmail = localStorage.getItem("email");
        if (storedEmail) {
            setEmail(storedEmail);
        }
    }, []);

    // Logout handler
    const handleLogout = () => {
        localStorage.removeItem("email");
        navigate("/");
    };

    // Generate avatar initials
    const getInitials = (email) => {
        return email ? email.charAt(0).toUpperCase() : "U";
    };

    // Navigation items
    const navItems = [
        { label: "Home", path: "/dashboard" },
        { label: "Search", path: "/search" },
        { label: "Profiles", path: "/profiles" },
    ];

    return (
        <nav className="navbar">
            {/* Logo */}
            <div className="navbar-logo" onClick={() => navigate("/dashboard")}>
                JobPortal
            </div>

            {/* Mobile Menu Toggle */}
            <div
                className="menu-icon"
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
                <FaBars />
            </div>

            {/* Navigation Links */}
            <ul className={`nav-links ${isMobileMenuOpen ? "active" : ""}`}>
                {navItems.map((item) => (
                    <li
                        key={item.path}
                        className={location.pathname === item.path ? "active" : ""}
                        onClick={() => {
                            navigate(item.path);
                            setIsMobileMenuOpen(false);
                        }}
                    >
                        {item.label}
                    </li>
                ))}

                {/* User Info & Dropdown */}
                <div
                    className="userInfo"
                    onClick={() => setIsDropdownOpen((prev) => !prev)}
                >
                    <div className="avatar">{getInitials(email)}</div>
                    <span className="user-email">{email}</span>

                    {isDropdownOpen && (
                        <ul className="DropdownMenu">
                            <li onClick={() => navigate("/profile")}>Profile</li>
                            <li onClick={() => navigate("/settings")}>Settings</li>
                            <li onClick={handleLogout}>Logout</li>
                        </ul>
                    )}
                </div>
            </ul>

        </nav>
    );
};

export default Navbar;
