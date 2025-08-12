import React, { useEffect, useState } from "react";
import profileData from "../profile.json";
import "./ProfilePage.css";

const ProfilePage = () => {
    const [profile, setProfile] = useState(null);

    useEffect(() => {
        setProfile(profileData);
    }, []);

    if (!profile) return <p>Loading profile...</p>;

    return (
        <div className="profile-container">
            <div className="profile-header">
                <img src={profile.profilePic} alt={profile.name} className="profile-pic" />
                <div>
                    <h1>{profile.name}</h1>
                    <p>{profile.role} - {profile.location}</p>
                    <p><strong>Experience:</strong> {profile.experience}</p>
                </div>
            </div>

            <div className="profile-section">
                <h2>About Me</h2>
                <p>{profile.bio}</p>
            </div>

            <div className="profile-section">
                <h2>Skills</h2>
                <ul className="skills-list">
                    {profile.skills.map((skill, index) => (
                        <li key={index}>{skill}</li>
                    ))}
                </ul>
            </div>

            <div className="profile-section">
                <h2>Education</h2>
                {profile.education.map((edu, index) => (
                    <p key={index}>{edu.degree} - {edu.institution} ({edu.year})</p>
                ))}
            </div>

            <div className="profile-section">
                <h2>Experience</h2>
                {profile.experienceDetails.map((exp, index) => (
                    <div key={index}>
                        <h3>{exp.company} - {exp.role}</h3>
                        <p>{exp.duration}</p>
                        <p>{exp.description}</p>
                    </div>
                ))}
            </div>

            <div className="profile-section">
                <h2>Projects</h2>
                {profile.projects.map((proj, index) => (
                    <div key={index}>
                        <h3>{proj.title}</h3>
                        <p>{proj.description}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ProfilePage;
