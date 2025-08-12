import React, { useState, useEffect } from "react";
import jobsData from "../jobs.json";
import Navbar from "./Navbar";
import ApplyPopup from "./ApplyPopup"; 
import "./Dashboard.css";
import { FaSearch, FaMapMarkerAlt } from "react-icons/fa";

const Dashboard = () => {
    const [jobs, setJobs] = useState([]);
    const [searchTerm, setSearchTerm] = useState("");
    const [locationFilter, setLocationFilter] = useState("");
    const [filteredJobs, setFilteredJobs] = useState([]);
    const [showPopup, setShowPopup] = useState(false);
    const [selectedJob, setSelectedJob] = useState(null);

    useEffect(() => {
        setJobs(jobsData);
        setFilteredJobs(jobsData);
    }, []);

    useEffect(() => {
        let updatedJobs = jobs;

        if (searchTerm.trim()) {
            updatedJobs = updatedJobs.filter(job =>
                job.title.toLowerCase().includes(searchTerm.toLowerCase())
            );
        }

        if (locationFilter.trim()) {
            updatedJobs = updatedJobs.filter(job =>
                job.location.toLowerCase().includes(locationFilter.toLowerCase())
            );
        }

        setFilteredJobs(updatedJobs);
    }, [searchTerm, locationFilter, jobs]);

    const handleApplyClick = (job) => {
        setSelectedJob(job);
        setShowPopup(true);
    };

    return (
        <div className="dashboard">
            <Navbar />
            <h1 className="dashboard-title">💼 Job Dashboard</h1>

            {/* Filters */}
            <div className="filters">
                <div className="filter-input">
                    <FaSearch className="filter-icon" />
                    <input
                        type="text"
                        placeholder="Search by job title..."
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                    />
                </div>

                <div className="filter-input">
                    <FaMapMarkerAlt className="filter-icon" />
                    <input
                        type="text"
                        placeholder="Filter by location..."
                        value={locationFilter}
                        onChange={(e) => setLocationFilter(e.target.value)}
                    />
                </div>
            </div>

            {/* Job Listing */}
            <div className="job-list">
                {filteredJobs.length > 0 ? (
                    filteredJobs.map((job) => (
                        <div className="job-card" key={job.id}>
                            <h3>{job.title}</h3>
                            <p><strong>🏢 Company:</strong> {job.company}</p>
                            <p><strong>📍 Location:</strong> {job.location}</p>
                            <p><strong>💰 Salary:</strong> {job.salary}</p>
                            <button onClick={() => handleApplyClick(job)}>Apply Now</button>
                        </div>
                    ))
                ) : (
                    <p className="no-results">No jobs found matching your criteria.</p>
                )}
            </div>

            {/* Popup Component */}
            {showPopup && (
                <ApplyPopup
                    job={selectedJob}
                    onClose={() => setShowPopup(false)}
                />
            )}
        </div>
    );
};

export default Dashboard;
