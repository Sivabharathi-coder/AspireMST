import React from "react";
import JobCard from "./JobCard";
import Run from "./HelloWorld";

function JobList() {
    const jobData = [
        {
            title: "Frontend Developer",
            company: "Google",
            location: "Bangalore",
            skills: ["React", "JavaScript", "HTML", "CSS"],
            salary: "1200000"
        },
        {
            title: "Backend Developer",
            company: "Amazon",
            location: "Chennai",
            skills: ["Node.js", "MongoDB", "Express"],
            salary: "1400000"
        },
        {
            title: "Full Stack Engineer",
            company: "Infosys",
            location: "Hyderabad",
            skills: ["React", "Node", "GraphQL"],
            salary: "1000000"
        }
    ];

    return (

        <div>
            <h1>Job Listing</h1>
            {jobData.map((job, index) => {
                return (
                    <JobCard
                        key={index}
                        title={job.title}
                        company={job.company}
                        location={job.location}
                        skills={job.skills}
                        salary={job.salary}
                    />
                )

            })
            }
            <Run />

        </div>
    )
}

export default JobList;