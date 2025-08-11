import React, { useEffect, useState } from "react";
import './Navbar.css';
import { useNavigate } from "react-router-dom";
const Navbar = () => {
    const [email, setEmail] = useState(' ');
    const [isDropdownopen, setIsDropdownopen] = useState(false);
    const navigate = useNavigate();
    useEffect(() => {
        const email = localStorage.getItem('email');
        if (email) {
            setEmail(email);
        }
        console.log("email", email)

    }, [])

    const handleLogout = () => {
        localStorage.removeItem('email');
        navigate('/')
    }

    return (
        <ul className="navbar">
            <li>Home</li>
            <li>Search</li>
            <li>Profiles</li>
            <div className="userInfo"
                onClick={() => setIsDropdownopen(prev => !prev)}
            >
                <div className="avatar">S</div>
                <li>{email}</li>

                {
                    isDropdownopen && (
                        <ul className="DropdownMenu">
                            <li>Profile</li>
                            <li>Settings</li>
                            <li
                                onClick={handleLogout}
                            >Logout</li>
                        </ul>
                    )
                }
            </div>

            {/* <li>Logout</li> */}
        </ul>


    )
}
export default Navbar;