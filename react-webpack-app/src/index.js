import React from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoginForm from "./Components/LoginForm";
import Dashboard from "./Components/Dashboard";
import WindowTracker from "./Component/WindowTracker";
import JobList from "./Component/JobList";
import ForgotPassword from "./Components/ForgotPassword";
import Navbar from "./Components/Navbar";
import ProfilePage from "./Components/ProfilePage";
import PropertyCard from "./HomeComponents/PropertyCard/PropertyCard";

const container = document.getElementById("root");
const root = createRoot(container);

root.render(
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<LoginForm />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/navbar" element={<Navbar />} />
            <Route path="/WindowTracker" element={<WindowTracker />} />
            <Route path="/JobList" element={<JobList />} />
            <Route path="/forgotPassword" element={<ForgotPassword />} />
            <Route path="/profile" element={<ProfilePage />} />
            <Route path="/propertyCard" element={<PropertyCard />} />

        </Routes>
    </BrowserRouter>
);
