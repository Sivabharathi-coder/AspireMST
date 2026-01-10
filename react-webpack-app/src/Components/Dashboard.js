import React, { useState, useEffect } from "react";
import Navbar from "./Navbar";
import ApplyPopup from "./ApplyPopup";
import "./Dashboard.css";
import { FaSearch, FaMapMarkerAlt } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { setJobs } from "../Redux/store";
import jobsData from "../jobs.json";

const Dashboard = () => {
    // const [jobs, setJobs] = useState([]);
    const [searchTerm, setSearchTerm] = useState("");
    const [locationFilter, setLocationFilter] = useState("");
    const [filteredJobs, setFilteredJobs] = useState([]);
    const [showPopup, setShowPopup] = useState(false);
    const [selectedJob, setSelectedJob] = useState(null);
    const dispatch = useDispatch();
    const jobs = useSelector((state) => state.app.jobs); //  get jobs from Redux
    const applications = useSelector((state) => state.app.applications);

    const isJobApplied = (jobId) => {
        return applications.some(app => app.jobId === jobId);
    };

    useEffect(() => {
        dispatch(setJobs(jobsData)); //  store jobs in Redux
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
                        <div
                            className={`job-card p-4 border rounded shadow mb-4 transition-all ${isJobApplied(job.id)
                                ? "bg-gray-100 opacity-70 border-gray-300"
                                : "bg-white hover:shadow-lg"
                                }`}
                            key={job.id}
                        >
                            <h3 className={`text-lg font-semibold ${isJobApplied(job.id) ? "line-through text-gray-500" : ""}`}>
                                {job.title}
                            </h3>
                            <p><strong>🏢 Company:</strong> {job.company}</p>
                            <p><strong>📍 Location:</strong> {job.location}</p>
                            <p><strong>💰 Salary:</strong> {job.salary}</p>

                            <button
                                onClick={() => handleApplyClick(job)}
                                disabled={isJobApplied(job.id)}
                                className={`mt-2 px-4 py-2 rounded font-medium transition-colors duration-200 
        ${isJobApplied(job.id)
                                        ? "bg-green-500 text-white cursor-default"
                                        : "bg-blue-500 hover:bg-blue-600 text-white"
                                    }`}
                            >
                                {isJobApplied(job.id) ? "Applied" : "Apply Now"}
                            </button>

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
