import React, { useState, useEffect } from "react";
import "./LiftingStateWithHooks.css";

//  Mock JSON data (realistic job listings)
const mockJobs = [
    { id: 1, title: "Frontend Developer", company: "Google", salary: "12 LPA", skills: ["React", "JavaScript", "CSS"] },
    { id: 2, title: "Backend Developer", company: "Amazon", salary: "15 LPA", skills: ["Node.js", "Express", "MongoDB"] },
    { id: 3, title: "Fullstack Developer", company: "Microsoft", salary: "18 LPA", skills: ["React", "Node.js", "SQL"] },
];

//  Child A – Dropdown to select job
function JobSelector({ value, onChange, jobs }) {
    return (
        <div className="selector-box">
            <h4>Select a Job</h4>
            <select value={value} onChange={(e) => onChange(e.target.value)} className="dropdown">
                <option value="">-- Select Job --</option>
                {jobs.map((job) => (
                    <option key={job.id} value={job.id}>
                        {job.title}
                    </option>
                ))}
            </select>
        </div>
    );
}

//  Child B – Show job details
function JobDetails({ selectedJob }) {
    if (!selectedJob) {
        return <div className="alert">⚠️ No job selected</div>;
    }

    return (
        <div className="card">
            <h3>{selectedJob.title}</h3>
            <h4>{selectedJob.company}</h4>
            <p><b>💰 Salary:</b> {selectedJob.salary}</p>
            <p><b>🛠 Skills Required:</b></p>
            <ul>
                {selectedJob.skills.map((skill, index) => (
                    <li key={index}>{skill}</li>
                ))}
            </ul>
        </div>
    );
}

function LiftingStateWithHooks() {
    const [jobs, setJobs] = useState([]);
    const [selectedJobId, setSelectedJobId] = useState("");

    // useEffect to simulate API call
    useEffect(() => {
        console.log("Fetching jobs from API...");
        setTimeout(() => {
            setJobs(mockJobs);
        }, 1000);
    }, []);

    const selectedJob = jobs.find((job) => job.id === Number(selectedJobId));

    return (
        <div className="container">
            <h2 className="title">🚀 Job Portal (Lifting State + Hooks)</h2>
            <div className="layout">
                <JobSelector value={selectedJobId} onChange={setSelectedJobId} jobs={jobs} />
                <JobDetails selectedJob={selectedJob} />
            </div>
        </div>
    );
}

export default LiftingStateWithHooks;
