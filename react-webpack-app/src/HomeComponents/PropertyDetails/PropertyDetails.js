// PropertyDetails.jsx
import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import properties from "../../properties.json";

const PropertyDetails = () => {
    const { id } = useParams();
    const property = properties.find((p) => p.id.toString() === id);

    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    // Automatically change image every 3 seconds
    useEffect(() => {
        if (property?.images?.length > 1) {
            const interval = setInterval(() => {
                setCurrentImageIndex((prevIndex) =>
                    prevIndex === property.images.length - 1 ? 0 : prevIndex + 1
                );
            }, 3000);
            return () => clearInterval(interval);
        }
    }, [property]);

    if (!property) {
        return (
            <h2 style={{ textAlign: "center", marginTop: "50px" }}>
                Property not found
            </h2>
        );
    }

    return (
        <div style={{ maxWidth: "1100px", margin: "40px auto", padding: "20px" }}>
            {/* Image Carousel */}
            <div style={{ marginBottom: "20px", position: "relative" }}>
                <img
                    src={property.images?.[currentImageIndex] || property.image}
                    alt={property.title}
                    style={{
                        width: "100%",
                        height: "450px",
                        objectFit: "cover",
                        borderRadius: "12px",
                        transition: "opacity 0.5s ease-in-out",
                    }}
                />
                {/* Image counter */}
                {property.images?.length > 1 && (
                    <div
                        style={{
                            position: "absolute",
                            bottom: "10px",
                            right: "15px",
                            background: "rgba(0,0,0,0.5)",
                            color: "#fff",
                            padding: "4px 10px",
                            borderRadius: "6px",
                            fontSize: "0.9rem",
                        }}
                    >
                        {currentImageIndex + 1} / {property.images.length}
                    </div>
                )}
            </div>

            {/* Title + Location + Price */}
            <div style={{ marginBottom: "20px" }}>
                <h1 style={{ margin: "0", fontSize: "2rem" }}>{property.title}</h1>
                <p style={{ color: "#666", fontSize: "1.1rem" }}>📍 {property.location}</p>
                <p
                    style={{
                        fontSize: "1.3rem",
                        fontWeight: "bold",
                        color: "#007bff",
                        marginTop: "10px",
                    }}
                >
                    {property.price}
                </p>
            </div>

            {/* Description */}
            <div style={{ marginBottom: "30px", lineHeight: "1.6" }}>
                {property.description}
            </div>

            {/* Amenities */}
            <div style={{ marginBottom: "30px" }}>
                <h3 style={{ marginBottom: "10px" }}>✨ Amenities</h3>
                <ul style={{ columns: 2, paddingLeft: "20px" }}>
                    {property.amenities?.map((amenity, index) => (
                        <li key={index} style={{ marginBottom: "8px" }}>
                            {amenity}
                        </li>
                    ))}
                </ul>
            </div>

            {/* Safety Instructions */}
            <div style={{ marginBottom: "30px" }}>
                <h3 style={{ marginBottom: "10px" }}>🛡 Safety Instructions</h3>
                <ul style={{ paddingLeft: "20px" }}>
                    {property.safety_instructions?.map((safety, index) => (
                        <li key={index} style={{ marginBottom: "8px" }}>
                            {safety}
                        </li>
                    ))}
                </ul>
            </div>

            {/* Check-in / Check-out */}
            <div style={{ marginBottom: "30px" }}>
                <h3>🕒 Check-in / Check-out</h3>
                <p>
                    <strong>Check-in:</strong> {property.checkIn || "2:00 PM"}
                </p>
                <p>
                    <strong>Check-out:</strong> {property.checkOut || "11:00 AM"}
                </p>
            </div>

            {/* Buttons */}
            <div style={{ display: "flex", gap: "10px" }}>
                <Link
                    to={`/booking/${property.id}`}
                    style={{
                        backgroundColor: "#ff5a5f",
                        color: "#fff",
                        padding: "12px 20px",
                        borderRadius: "8px",
                        textDecoration: "none",
                        fontWeight: "bold",
                    }}
                >
                    Book Now
                </Link>
                <Link
                    to="/"
                    style={{
                        backgroundColor: "#6c757d",
                        color: "#fff",
                        padding: "12px 20px",
                        borderRadius: "8px",
                        textDecoration: "none",
                    }}
                >
                    Back to Home
                </Link>
            </div>
        </div>
    );
};

export default PropertyDetails;
