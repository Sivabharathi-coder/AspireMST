import React, { useState } from "react";
import "./ApplyPopup.css";

const ApplyPopup = ({ job, onClose }) => {
    const [formData, setFormData] = useState({
        fullName: "",
        email: "",
        phone: "",
        address: "",
        dob: "",
        gender: "",
        experience: "",
        skills: "",
        expectedSalary: "",
        resume: null,
        declaration: false
    });

    const [errors, setErrors] = useState({});

    const handleChange = (e) => {
        const { name, value, type, checked, files } = e.target;
        if (type === "checkbox") {
            setFormData({ ...formData, [name]: checked });
        } else if (type === "file") {
            setFormData({ ...formData, [name]: files[0] });
        } else {
            setFormData({ ...formData, [name]: value });
        }
    };

    const validateForm = () => {
        let newErrors = {};
        if (!formData.fullName.trim()) newErrors.fullName = "Full Name is required";
        if (!formData.email.trim()) {
            newErrors.email = "Email is required";
        } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
            newErrors.email = "Invalid email format";
        }
        if (!formData.phone.trim()) {
            newErrors.phone = "Phone is required";
        } else if (!/^\d{10}$/.test(formData.phone)) {
            newErrors.phone = "Phone must be 10 digits";
        }
        if (!formData.address.trim()) newErrors.address = "Address is required";
        if (!formData.dob) newErrors.dob = "Date of Birth is required";
        if (!formData.gender) newErrors.gender = "Gender is required";
        if (!formData.experience) newErrors.experience = "Experience is required";
        if (!formData.skills.trim()) newErrors.skills = "Skills are required";
        if (!formData.expectedSalary.trim()) newErrors.expectedSalary = "Expected Salary is required";
        if (!formData.resume) newErrors.resume = "Resume is required";
        if (!formData.declaration) newErrors.declaration = "You must agree to the declaration";
        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = () => {
        if (validateForm()) {
            alert(`Application submitted for ${job.title}!`);
            onClose();
        }
    };

    return (
        <div className="popup-overlay">
            <div className="popup big-form">
                <h2>Apply for {job?.title}</h2>

                {/* Personal Info */}
                <input type="text" name="fullName" placeholder="Full Name" value={formData.fullName} onChange={handleChange} />
                {errors.fullName && <p className="error">{errors.fullName}</p>}

                <input type="email" name="email" placeholder="Email" value={formData.email} onChange={handleChange} />
                {errors.email && <p className="error">{errors.email}</p>}

                <input type="tel" name="phone" placeholder="Phone (10 digits)" value={formData.phone} onChange={handleChange} />
                {errors.phone && <p className="error">{errors.phone}</p>}

                <textarea name="address" placeholder="Address" value={formData.address} onChange={handleChange}></textarea>
                {errors.address && <p className="error">{errors.address}</p>}

                <label>Date of Birth:</label>
                <input type="date" name="dob" value={formData.dob} onChange={handleChange} />
                {errors.dob && <p className="error">{errors.dob}</p>}

                <label>Gender:</label>
                <select name="gender" value={formData.gender} onChange={handleChange}>
                    <option value="">Select Gender</option>
                    <option value="Male">Male</option>
                    <option value="Female">Female</option>
                    <option value="Other">Other</option>
                </select>
                {errors.gender && <p className="error">{errors.gender}</p>}

                {/* Professional Info */}
                <label>Years of Experience:</label>
                <select name="experience" value={formData.experience} onChange={handleChange}>
                    <option value="">Select</option>
                    <option value="0-1">0-1 years</option>
                    <option value="1-3">1-3 years</option>
                    <option value="3-5">3-5 years</option>
                    <option value="5+">5+ years</option>
                </select>
                {errors.experience && <p className="error">{errors.experience}</p>}

                <textarea name="skills" placeholder="Skills (comma separated)" value={formData.skills} onChange={handleChange}></textarea>
                {errors.skills && <p className="error">{errors.skills}</p>}

                <input type="text" name="expectedSalary" placeholder="Expected Salary" value={formData.expectedSalary} onChange={handleChange} />
                {errors.expectedSalary && <p className="error">{errors.expectedSalary}</p>}

                {/* Resume Upload */}
                <label>Upload Resume:</label>
                <input type="file" name="resume" onChange={handleChange} />
                {errors.resume && <p className="error">{errors.resume}</p>}

                {/* Declaration */}
                <label className="declaration">
                    <input type="checkbox" name="declaration" checked={formData.declaration} onChange={handleChange} />
                    I hereby declare that all information provided is true to the best of my knowledge.
                </label>
                {errors.declaration && <p className="error">{errors.declaration}</p>}

                {/* Buttons */}
                <div className="popup-buttons">
                    <button onClick={handleSubmit}>Submit Application</button>
                    <button className="cancel-btn" onClick={onClose}>Cancel</button>
                </div>
            </div>
        </div>
    );
};

export default ApplyPopup;
