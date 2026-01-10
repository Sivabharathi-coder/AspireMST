import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { FaUserCircle, FaBars, FaChevronDown } from "react-icons/fa";
import './HomeNavbar.css';

const HomeNavbar = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [isPropertiesDropdownOpen, setIsPropertiesDropdownOpen] = useState(false);
    const [isUserDropdownOpen, setIsUserDropdownOpen] = useState(false);
    const userMenuRef = useRef(null);
    const propertiesMenuRef = useRef(null);

    useEffect(() => {
        function handleClickOutside(event) {
            if (userMenuRef.current && !userMenuRef.current.contains(event.target)) {
                setIsUserDropdownOpen(false);
            }
            if (propertiesMenuRef.current && !propertiesMenuRef.current.contains(event.target)) {
                setIsPropertiesDropdownOpen(false);
            }
        }
        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, []);
    
    const toggleMobileMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);
    const togglePropertiesDropdown = () => setIsPropertiesDropdownOpen(!isPropertiesDropdownOpen);
    const toggleUserDropdown = () => setIsUserDropdownOpen(!isUserDropdownOpen);

    return (
        <>
            <nav className="home-navbar">
                <div className="navbar-container">
                    <div className="navbar-logo" tabIndex={0}>
                        <Link to="/"> CozyStay</Link>
                    </div>

                    <div className={`nav-links ${isMobileMenuOpen ? "active" : ""}`}>
                        <Link to="/" className="nav-link">Home</Link>

                        <div
                            className="nav-dropdown"
                            onClick={togglePropertiesDropdown}
                            ref={propertiesMenuRef}
                            tabIndex={0}
                            onKeyDown={(e) => { if (e.key === 'Enter') togglePropertiesDropdown(); }}
                        >
                            Properties <FaChevronDown className="dropdown-icon" />
                            {isPropertiesDropdownOpen && (
                                <ul className="dropdown-menu">
                                    <li><Link to="/apartments">Apartments</Link></li>
                                    <li><Link to="/houses">Houses</Link></li>
                                    <li><Link to="/villas">Villas</Link></li>
                                    <li><Link to="/condos">Condos</Link></li>
                                </ul>
                            )}
                        </div>

                        <Link to="/about" className="nav-link">About Us</Link>
                        <Link to="/contact" className="nav-link">Contact</Link>
                    </div>

                    <div
                        className="user-menu"
                        onClick={toggleUserDropdown}
                        ref={userMenuRef}
                        tabIndex={0}
                        onKeyDown={(e) => { if (e.key === 'Enter') toggleUserDropdown(); }}
                        aria-haspopup="true"
                        aria-expanded={isUserDropdownOpen}
                        aria-label="User menu"
                    >
                        <FaUserCircle className="user-icon" />
                        {isUserDropdownOpen && (
                            <ul className="user-dropdown-menu">
                                <li><Link to="/profile">Profile</Link></li>
                                <li><Link to="/settings">Settings</Link></li>
                                <li><Link to="/">Logout</Link></li>
                            </ul>
                        )}
                    </div>

                    <div className="mobile-menu-icon" onClick={toggleMobileMenu} aria-label="Toggle menu" tabIndex={0} onKeyDown={(e) => { if (e.key === 'Enter') toggleMobileMenu(); }}>
                        <FaBars />
                    </div>
                </div>
            </nav>
            



        </>
    );
};

export default HomeNavbar;
