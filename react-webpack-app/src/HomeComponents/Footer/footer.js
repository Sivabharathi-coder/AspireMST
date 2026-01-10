import React from "react";
import { Link } from "react-router-dom";
import { FaFacebookF, FaTwitter, FaInstagram, FaPhoneAlt, FaEnvelope } from "react-icons/fa";
import "./Footer.css";

const Footer = () => {
    return (
        <footer className="site-footer">
            <div className="footer-container">

                {/* Column 1: Brand */}
                <div className="footer-col">
                    <h3 className="footer-logo">CozyStay</h3>
                    <p>
                        Your trusted partner for finding the perfect home or property.
                        We offer a wide range of listings with a seamless user experience.
                    </p>
                </div>

                {/* Column 2: Quick Links */}
                <div className="footer-col">
                    <h4>Quick Links</h4>
                    <ul>
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/properties">Properties</Link></li>
                        <li><Link to="/about">About Us</Link></li>
                        <li><Link to="/contact">Contact</Link></li>
                    </ul>
                </div>

                {/* Column 3: Contact Info */}
                <div className="footer-col">
                    <h4>Contact</h4>
                    <p><FaPhoneAlt /> +91 98765 43210</p>
                    <p><FaEnvelope /> support@cozystay.com</p>
                    <div className="footer-socials">
                        <a href="#"><FaFacebookF /></a>
                        <a href="#"><FaTwitter /></a>
                        <a href="#"><FaInstagram /></a>
                    </div>
                </div>

            </div>

            <div className="footer-bottom">
                <p>© {new Date().getFullYear()} CozyStay. All rights reserved.</p>
            </div>
        </footer>
    );
};

export default Footer;
