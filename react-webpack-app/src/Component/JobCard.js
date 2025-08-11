import React from "react";

const cardStyle = {
    border: "1px solid #ddd",
    borderRadius: "8px",
    padding: "16px",
    margin: "10px 0",
    backgroundColor: "#f9f9f9"
}
function JobCard({ title, company, location, skills, salary }) {


    return (

        <div className="job-card" style={cardStyle}>
            <h2>{title}</h2>
            <p><strong>Company:</strong> {company}</p>
            <p><strong>Location:</strong> {location}</p>
            <p><strong>Skills:</strong> {skills.join(", ")}</p>
            <p><strong>Salary:</strong> ₹{salary} per year</p>
        </div >
    )
}

export default JobCard;
