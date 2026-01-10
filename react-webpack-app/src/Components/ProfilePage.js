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
        <div className="profile-container enriched">
            {/* Header */}
            <div className="profile-header">
                <div className="profile-banner"></div>
                <img src={profile.profilePic} alt={profile.name} className="profile-pic" />
                <div className="profile-info">
                    <h1>{profile.name}</h1>
                    <p className="role-location">{profile.role} • {profile.location}</p>
                    <p><strong>Experience:</strong> {profile.experience}</p>
                </div>
            </div>

            {/* About Me */}
            <section className="profile-section about-me">
                <h2>📝 About Me</h2>
                <p>{profile.bio}</p>
            </section>

            {/* Skills */}
            <section className="profile-section skills">
                <h2>💡 Skills</h2>
                <ul className="skills-list">
                    {profile.skills.map((skill, index) => (
                        <li key={index} className="skill-item">{skill}</li>
                    ))}
                </ul>
            </section>

            {/* Education */}
            <section className="profile-section education">
                <h2>🎓 Education</h2>
                {profile.education.map((edu, index) => (
                    <p key={index} className="education-item">
                        <strong>{edu.degree}</strong> - {edu.institution} <span>({edu.year})</span>
                    </p>
                ))}
            </section>

            {/* Experience */}
            <section className="profile-section experience">
                <h2>💼 Experience</h2>
                {profile.experienceDetails.map((exp, index) => (
                    <div key={index} className="experience-item">
                        <h3>{exp.company} - {exp.role}</h3>
                        <p className="duration">{exp.duration}</p>
                        <p>{exp.description}</p>
                    </div>
                ))}
            </section>

            {/* Projects */}
            <section className="profile-section projects">
                <h2>🚀 Projects</h2>
                {profile.projects.map((proj, index) => (
                    <div key={index} className="project-item">
                        <h3>{proj.title}</h3>
                        <p>{proj.description}</p>
                    </div>
                ))}
            </section>
        </div>
    );
};

export default ProfilePage;
