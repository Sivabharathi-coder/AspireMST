import React, { useEffect, useState } from "react";
import users from "../users.json";
import { Link } from "react-router-dom";
import JobList from "../Component/JobList";
import Button from "../Component/Button";
import Profile from "../Component/Image";
import LoggedIn from "../Component/ConditionalRender";
import Navbar from "./Navbar";
const Dashboard = () => {
    const [user, setUser] = useState(null);

    useEffect(() => {
        const userId = localStorage.getItem("userId");
        if (userId) {
            const matchedUser = users.find((u) => u.id === parseInt(userId));
            setUser(matchedUser);
        }
    }, []);

    return (
        <div >
            {/* {user ? (
                <>
                    <h2>Hi {user.fullname} </h2>
                    <p>Role: {user.role}</p>
                </>
            ) : (
                <h2>No user found. Please log in again.</h2>
            )}
            <Link to="/WindowTracker">
                <button>Go to Window Tracker</button>
            </Link> */}
            <Navbar />
            <JobList />
            <Button />
            <Profile />
            <LoggedIn />
        </div>

    );
};

export default Dashboard;
